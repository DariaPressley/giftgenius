const typeDefs = `
  type Product {
    _id: ID!
    title: String!
    description: String!
    condition: String!
    cateogry: String!
    ownerEmail: String!
    price: Int
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    product: [Product]
  }

  Mutation {
    addProduct(name: String!, price: Int,occasion:String!)
  }
`;

module.exports = typeDefs;
