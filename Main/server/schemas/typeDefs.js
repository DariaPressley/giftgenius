const typeDefs = `
  type Product {
    _id: ID!
    title: String!
    description: String!
    condition: String!
    category: String!  
    ownerEmail: String!
    price: Int
    image: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    products: [Product] 
    users: [User]        
    me: User             
  }

  type Mutation {
    addProduct(name: String!, price: Int, occasion: String!): Product 
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): AuthPayload
    removeProduct(productId: ID!): User
  }
  
  type AuthPayload {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
