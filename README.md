Projeto de Exemplo com Express.js
 
Este é um projeto de exemplo que demonstra o uso básico do framework Express.js para criar uma API RESTful. O projeto inclui rotas para listar, adicionar, atualizar e deletar usuários. Além disso, ele utiliza middlewares para autenticação e logging.
 
## Estrutura do Projeto
 
- `app.js`: Arquivo principal da aplicação, onde as rotas e middlewares são configurados.
- `middlewares/logger.js`: Middleware para logar as requisições recebidas.
- `middlewares/auth.js`: Middleware para autenticação simples usando um token.
  
## Como Executar o Projeto
 
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```
 
2. **Instale as dependências**:
   ```bash
   npm install
   ```
 
3. **Configure o arquivo `.env`**:
   Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:
   ```env
   SECRET_TOKEN=seu-token-aqui
   ```
   **Nota**: Esta maneira de usar token é apenas para exemplificar. Em um ambiente de produção, é recomendado usar métodos mais seguros para gerenciar tokens, como JWT (JSON Web Tokens) ou OAuth.
   
4. **Inicie o servidor**:
   ```bash
   npm start
   ```
   
   O servidor estará rodando em `http://localhost:3000`.
   
## Rotas Disponíveis
   
- **GET /usuarios**: Retorna a lista de todos os usuários.
- **POST /usuarios**: Adiciona um novo usuário. Requer autenticação.
- **PUT /usuarios/:id**: Atualiza um usuário existente. Requer autenticação.
- **DELETE /usuarios/:id**: Deleta um usuário. Requer autenticação.
    
## Middlewares
   
- **logger**: Loga as requisições recebidas no console.
- **auth**: Verifica se o token de autenticação é válido antes de permitir o acesso às rotas protegidas.
   
## Exemplo de Uso
   
### Listar Usuários
```bash
curl -X GET http://localhost:3000/usuarios
```
   
### Adicionar Usuário
```bash
curl -X POST -H "Authorization: Bearer seu-token-aqui" -H "Content-Type: application/json" -d '{"nome": "Novo Usuário"}' http://localhost:3000/usuarios
```
  
### Atualizar Usuário
```bash
curl -X PUT -H "Authorization: Bearer seu-token-aqui" -H "Content-Type: application/json" -d '{"nome": "Usuário Atualizado"}' http://localhost:3000/usuarios/1
```
  
### Deletar Usuário
```bash
curl -X DELETE -H "Authorization: Bearer seu-token-aqui" http://localhost:3000/usuarios/1
```
  
## Considerações de Segurança
  
Este projeto utiliza um método simplificado de autenticação para fins de demonstração. Em um ambiente de produção, é crucial implementar métodos de autenticação mais robustos e seguros, como JWT ou OAuth, e nunca expor tokens sensíveis no código-fonte ou em arquivos de configuração.

  
## Licença
  
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.7
