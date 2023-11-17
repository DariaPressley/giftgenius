import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT} from '../utils/queries';
import Products from './Products';

const Home = () => {
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    fetchPolicy: "no-cache"
  });

  const productDisplay = data?.products || [];

  
  return (
    <div>
      <div>
        <h1> Welcome to GiftGenius </h1>
        <p> Reappropriate your thoughtless gift here. </p>
           <p> Buy or trade those unwanted gifts from your parents and friends! </p>
      </div>
      <div>
        <Link to="/signup">
          <button className="btn btn-lg btn-danger">Create Account!</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-lg btn-danger">Login!</button>
        </Link>
      </div>
      <div>
        <h2> Regift that gift! </h2>
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
