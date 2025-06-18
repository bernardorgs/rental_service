# Serviço de Locação

#### Abrir a pasta da API

Antes de rodar qualquer comando, navegue até a pasta `api` do projeto:

```
cd api
```

#### Instalar Dependências

Para instalar todas as dependências, execute o comando abaixo:

```
npm install
```

#### Variáveis de Ambiente

Crie um arquivo `.env` na pasta raiz com as seguinte variáveis:

```env 
DATABASE_URL="url_banco" 
``` 

#### Iniciar o servidor

Para iniciar o servidor em modo de desenvolvimento, execute:

```
npm run start:dev
```

#### Acessar a documentação Swagger
Após iniciar o servidor, você pode acessar a documentação interativa da API via [Swagger UI](http://localhost:3333/docs).
