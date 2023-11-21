import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import Products from './Products';
import './Home.css'; 
import { useContext } from 'react';

const Home = () => {
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    fetchPolicy: "no-cache"
  });

  const productDisplay = data?.products || [];

  return (
    <div>
      <h1> GiftGenius </h1>
      <div className="about">
        <p> Don't throw away that sweater your parents gave you... </p>
      </div>
      <div className="buttons">
        <Link to="/signup">
          <button className="btn btn-lg btn-danger">Create Account!</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-lg btn-danger">Login!</button>
        </Link>
      </div>
      <div className="presentDisplay">
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