import { useState } from "react";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import Sidebar from "./components/sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const existe = carrinho.find((item) => item.id === produto.id);
    if (existe) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const atualizarQuantidade = (id, quantidade) => {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id
          ? { ...item, quantidade: quantidade < 1 ? 1 : quantidade }
          : item
      )
    );
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root usuarioLogado={usuarioLogado} />}>
        <Route
          index
          element={<Home adicionarAoCarrinho={adicionarAoCarrinho} />}
        />
        <Route
          path="cart"
          element={
            <Cart
              itensCarrinho={carrinho}
              atualizarQuantidade={atualizarQuantidade}
              removerDoCarrinho={removerDoCarrinho}
            />
          }
        />
        <Route
          path="login"
          element={<Login setUsuarioLogado={setUsuarioLogado} />}
        />
        <Route
          path="admin"
          element={
            usuarioLogado?.tipo === "admin" ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

function Root({ usuarioLogado }) {
  return (
    <div className="flex">
      <Sidebar usuarioLogado={usuarioLogado} />
      <div className="ml-[80px] w-full">
        <Outlet context={{ usuarioLogado }} />
      </div>
    </div>
  );
}

export default App;
