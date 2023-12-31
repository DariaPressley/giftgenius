const typeDefs = `
  type Product {
    _id: ID
    title: String
    description: String
    condition: String
    category: String
    ownerEmail: String
    price: Int
    image: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    products: [Product] 
    users: [User]        
    me: User           
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): User
    addProduct(title: String, description: String, condition: String, category: String, ownerEmail: String, price: Int, image: String): Product 
    addUser(username: String!, email: String!, password: String!): AuthPayload
    loginUser(email: String!, password: String!): AuthPayload
    removeProduct(productId: ID!): User
    makePayment(token: TokenInput, amount: Int): PaymentResult
  }
  
  type AuthPayload {
    token: ID
    user: User
  }

  input TokenInput {
    email: String!
    source: String!
  }

  type PaymentResult {
    success: Boolean
    message: String
  }

`;

module.exports = typeDefs;
