import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './pages/Header';
import axios from 'axios';
import Stripe from "react-stripe-checkout";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  handleToken = (totalAmount, token) => {
    try {
      axios.post ("http://localhost:3000/api/stripe/pay", {
        token: token.id,
        amount: totalAmount
      });
    } catch (error) {
      console.log (error);
    };
  }

  const tokenHandler = (token) => {
    handleToken(100, token);
  }

  return (
    <div>
        <ApolloProvider client={client}>
       <Header />
       <div className="flex-column justify-flex-start min-100-vh">
           <Outlet />
         </div>
         {/* Insert footer */}
     </ApolloProvider>
    <div>
      <Stripe 
          stripeKey= "pk_test_51OEbylLFoJobiVodNQ6xsVV6ljsIhM77mdECRhTewSgFgg6vowOeDaNkbeZ57U5AoDzRMcFKtsF7tOAUvbgdW8Aw00lAWII4A2"
          token= {tokenHandler}
          />
    </div>
     </div>
    <ApolloProvider client={client}>
      <Header />
      
      <div className="flex-column justify-flex-start min-100-vh">
          <Outlet />
        </div>

        
    </ApolloProvider>
  );
}

export default App;

