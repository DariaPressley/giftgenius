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
    addProfile(username: String!, email: String!, password: String!): User
    addProduct(name: String!, price: Int, occasion: String!): Product 
    addUser(username: String!, email: String!, password: String!): AuthPayload
    loginUser(email: String!, password: String!): AuthPayload
    removeProduct(productId: ID!): User
  }
  
  type AuthPayload {
    token: ID
    user: User
  }

  type Query {
    getMessage: String
  }

  input TokenInput {
    email: String!
    source: String!
  }

  type PaymentResult {
    success: Boolean
    message: String
  }

  type Mutation {
    makePayment(token: TokenInput, amount: Int): PaymentResult
  }
`;

module.exports = typeDefs;
