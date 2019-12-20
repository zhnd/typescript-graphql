// src/components/book/schema.js
const { gql } = require('apollo-server-koa');

const schema = gql`
  enum BookStatus {
    DELETED
    NORMAL
  }

  type Book {
    id: ID
    name: String
    price: Float
    status: BookStatus
  }

  extend type Query {
    book: Book
  }
`;

module.exports = schema;
