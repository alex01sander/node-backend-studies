# Controller de Usuários e Sistema de Rotas

Nesta etapa do estudo foi implementado um **controller de usuários** junto com um **sistema de rotas manual**, utilizando **Node.js puro**, sem o uso de frameworks como Express.

O objetivo foi entender como APIs REST funcionam internamente e como frameworks abstraem essas responsabilidades.

---

## Conceitos abordados

- Separação de responsabilidades (Server, Routes e Controllers)
- Criação de controllers para centralizar a lógica de negócio
- Implementação de um sistema de rotas baseado em array
- Dispatcher de rotas utilizando `req.method` e `req.url`
- Uso de dados mockados para simular uma base de dados
- Retorno de respostas HTTP com status e headers corretos

---

## Estrutura do projeto

src/
├─ controllers/
│ └─ usersController.js
├─ routes/
│ └─ index.js
├─ mocks/
│ └─ users.js
└─ server.js

### Responsabilidade de cada parte

- **controllers**: contém a lógica de tratamento das requisições
- **routes**: define os endpoints e métodos HTTP disponíveis
- **mocks**: simula dados persistidos (sem banco de dados)
- **server.js**: cria o servidor HTTP e faz o dispatch das rotas

---

## Rotas disponíveis

### GET /users

Retorna a lista de usuários em formato JSON.

**Exemplo de resposta:**

```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```
