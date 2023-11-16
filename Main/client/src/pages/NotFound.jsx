import { useLocation } from 'react-router-dom';

function NotFound() {
  let location = useLocation();
  return (
        <h1>
          Sorry, this page does not exist!
        </h1>
  );
}

export default NotFound;
