const typeDefs = `
  type Product {
    _id: ID!
    name: String!
    price: Int
    occassion: String!
  }

  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    username: String!
  }

  type Query {
    product: [Product]
  }

  Mutation {
    addProduct(name: String!, price: Int,occasion:String!)
  }
`;

module.exports = typeDefs;
