import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import Products from './Products';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';



const Home = () => {
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    fetchPolicy: "no-cache"
  });

  const productDisplay = data?.products || [];


  return (
    <div>
      <div class= "header">
      <Breadcrumb>

      <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>About Us</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>List My Gift</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Login</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Create My Account</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
      </div>
      <h1> GiftGenius </h1>
      <div class= "about">
        <p> Don't throw away that sweater your parents gave you... </p>
      </div>
      <div class= "buttons">
        <Link to="/signup">
          <button className="btn btn-lg btn-danger">Create Account!</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-lg btn-danger">Login!</button>
        </Link>
      </div>
      <div class= "presentDisplay">
        {loading ? (
          <div> loading... </div>
        ) : (
          <Products productDisplay={productDisplay} />
        )}
      </div>
    </div>
  );
};

export default Home;
