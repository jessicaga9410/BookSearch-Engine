const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email:String!
    password: String!
    bookCount: Int
    savedBooks:[Book]
  
  }

  type Book {
    _id: ID!
  author: [String]
  description:String
  bookId:String!
  image:String
  link:String
  title:String!
  }

  type Query {
    me:User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
