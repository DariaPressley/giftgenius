import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT} from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_PRODUCT, {
    fetchPolicy: "no-cache"
  });

  const productDisplay = data?.product || [];

  return (
    <div>
      <div>
        <h1> Welcome to GiftGenius </h1>
        <p>If you have received a totally thoughtless and inappropriate gift, this website is fory you! </p>
           <p> Buy or trade those unwanted gifts from your parents and friends here! </p>
      </div>
      <div>
        <h2> Regift that gift! </h2>
       {/* {productDisplay} */}
      </div>
      <div>
        <h2>Ready to create a new matchup?</h2>
        <Link to="/signup">
          <button className="btn btn-lg btn-danger">Login!</button>
          <button className="btn btn-lg btn-danger">Create Account!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
