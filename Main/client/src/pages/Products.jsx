import './Home.css';
// import Checkout from "react-router-dom";


const Products = ({ productDisplay }) => {
    console.log (productDisplay)
    return (
      <div>
        {productDisplay &&
          productDisplay.map((product) => (
            <div key={product._id}>
              <div>{product.title}</div>
              <div>{product.description}</div>
              <div>${product.price}</div>
              <div>{product.ownerEmail}</div>
              <img src={product.image} style={{width: "300px"}}/>
              <div> <button class="buyButton"> Buy Me! </button> </div>
            </div>
          ))}
      </div>
    );
  };

export default Products; 