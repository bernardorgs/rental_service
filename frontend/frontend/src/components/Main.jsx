import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";

const produtosData = [
  {
    id: 1,
    nome: "Caminhão para Aluguel",
    descricao: "Descrição do Caminhão 1",
    diaria: 200,
    imagem: "/caminhao.jpg",
  },
  {
    id: 2,
    nome: "Escavadeira para Aluguel",
    descricao: "Descrição da Escavadeira 1",
    diaria: 250,
    imagem: "/escavadeira.jpg",
  },
  {
    id: 3,
    nome: "Trator para Aluguel",
    descricao: "Descrição do Trator 1",
    diaria: 300,
    imagem: "/trator.jpg",
  },
  {
    id: 4,
    nome: "Caminhão para Aluguel",
    descricao: "Descrição do Caminhão 2",
    diaria: 220,
    imagem: "/caminhao-2.jpg",
  },
  {
    id: 5,
    nome: "Escavadeira para Aluguel",
    descricao: "Descrição da Escavadeira 2",
    diaria: 270,
    imagem: "/escavadeira-2.jpg",
  },
  {
    id: 6,
    nome: "Trator para Aluguel",
    descricao: "Descrição do Trator 2",
    diaria: 320,
    imagem: "/trator-2.jpg",
  },
  {
    id: 7,
    nome: "Caminhão para Aluguel",
    descricao: "Descrição do Caminhão 3",
    diaria: 240,
    imagem: "/caminhao-3.jpg",
  },
  {
    id: 8,
    nome: "Escavadeira para Aluguel",
    descricao: "Descrição da Escavadeira 3",
    diaria: 290,
    imagem: "/escavadeira-3.jpg",
  },
  {
    id: 9,
    nome: "Trator para Aluguel",
    descricao: "Descrição do Trator 3",
    diaria: 350,
    imagem: "/trator-3.jpg",
  },
  {
    id: 10,
    nome: "Caminhão para Aluguel",
    descricao: "Descrição do Caminhão 4",
    diaria: 260,
    imagem: "/caminhao-4.jpg",
  },
  {
    id: 11,
    nome: "Escavadeira para Aluguel",
    descricao: "Descrição da Escavadeira 4",
    diaria: 310,
    imagem: "/escavadeira-4.jpg",
  },
  {
    id: 12,
    nome: "Trator para Aluguel",
    descricao: "Descrição do Trator 4",
    diaria: 370,
    imagem: "/trator-4.jpg",
  },
];

const ProdutoCard = ({ produto, adicionarAoCarrinho }) => (
  <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
    <img
      src={produto.imagem}
      alt={produto.nome}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 bg-gray-00">
      <h2 className="text-lg font-bold text-black">{produto.nome}</h2>
      <p className="text-sm text-gray-600">{produto.descricao}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-orange-500">
          Diária: R$ {produto.diaria},00
        </span>
        <button onClick={() => adicionarAoCarrinho(produto)}>
          <CiShoppingCart className="text-black" size={22} />
        </button>
      </div>
    </div>
  </div>
);

const Main = ({ adicionarAoCarrinho }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [filteredProdutos, setFilteredProdutos] = useState(produtosData);

  const categorias = ["Caminhão", "Escavadeira", "Trator"];

  const filtrarProdutos = (categoria, busca) => {
    let resultados = produtosData;

    if (categoria) {
      resultados = resultados.filter((produto) =>
        produto.nome.toLowerCase().includes(categoria.toLowerCase())
      );
    }

    if (busca) {
      resultados = resultados.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
      );
    }

    setFilteredProdutos(resultados);
  };

  const handleSearch = (e) => {
    const valor = e.target.value;
    setSearchTerm(valor);
    filtrarProdutos(categoriaSelecionada, valor);
  };

  const handleCategoriaClick = (categoria) => {
    const novaCategoria = categoriaSelecionada === categoria ? null : categoria;
    setCategoriaSelecionada(novaCategoria);
    filtrarProdutos(novaCategoria, searchTerm);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <header className="sticky top-0 bg-white shadow z-10 p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-orange-500">
            Aluguel de Equipamentos
          </h1>
          <div className="flex items-center bg-gray-100 rounded px-3">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar por nome"
              className="bg-transparent p-2 outline-none w-52 text-black"
            />
            <button>
              <HiMagnifyingGlass size={20} className="text-orange-500" />
            </button>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {categorias.map((categoria, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoriaClick(categoria)}
              className={`cursor-pointer px-5 py-2 rounded-full shadow font-medium text-white ${
                categoriaSelecionada === categoria
                  ? "bg-orange-500"
                  : "bg-black hover:bg-orange-500 transition-colors"
              }`}
            >
              {categoria}
            </div>
          ))}
        </div>
      </header>

      <main className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
        {filteredProdutos.length > 0 ? (
          filteredProdutos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            Nenhum produto encontrado.
          </p>
        )}
      </main>
    </div>
  );
};

export default Main;
