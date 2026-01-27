# Primeira rota de API com Node.js

Este estudo demonstra como criar uma rota de API básica utilizando o **módulo HTTP nativo do Node.js**, sem o uso de frameworks.

## Conceitos abordados

- Criação de servidor HTTP com Node.js
- Roteamento básico usando `req.url` e `req.method`
- Retorno de respostas em JSON
- Uso de códigos de status HTTP (200, 404)
- Conceito de endpoint de API

## Como funciona

O servidor verifica a URL da requisição e o método HTTP para decidir qual resposta deve ser retornada.

## Rotas disponíveis

### GET /users

Retorna uma resposta em JSON:

```json
{
  "message": "Lista de usuários"
}
```

Qualquer outra rota

Retorna erro 404:
{
"error": "Rota não encontrada"
}
