import { gql } from '@apollo/client';

export const QUERY_USER= gql`
    query User {
    users {
      _id
      email
      password
      username
    }
  } 
`;

export const QUERY_PRODUCT = gql`
  query Query {
  products {
    _id
    title
    description
    condition
    category
    ownerEmail
    image
  }
}
`;
