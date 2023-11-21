import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;


export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const CREATE_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
    }
  }
}
`;

export const CREATE_PRODUCT = gql`

    mutation createProduct($name: String!, $occasion: String!, $price: Int) {
    addProduct(name: $name, occasion: $occasion, price: $price) {
      category
      condition
      description
      ownerEmail
      price
      title
      _id
    }
  } 
`;

export const PAYMENT = gql`

mutation Mutation($token: TokenInput, $amount: Int) {
  makePayment(token: $token, amount: $amount) {
    success
    message
  }
}
`; 
