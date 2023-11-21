import Stripe from "react-stripe-checkout";
import { useMutation } from "@apollo/client";
import { PAYMENT } from "../utils/mutations"; 

const Checkout = () => {
    const [makePayment, {error}] = useMutation(PAYMENT); 
    const handleToken = async (totalAmount, token) => {
      try {
        const {data} = await makePayment({
            variables: {
                token: token.id,
                amount: totalAmount
            }
        });
      } catch (error) {
        console.log(error);
      };
    }
  
    const tokenHandler = (token) => {
      handleToken(100, token);
    }
  
    return (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ fontSize: "20px" }}>
                Click "Pay with Card" to checkout here or contact the seller 
                if you are interested to exchange your gifts!
            </p>
            <Stripe 
                stripeKey= "pk_test_51OEbylLFoJobiVodNQ6xsVV6ljsIhM77mdECRhTewSgFgg6vowOeDaNkbeZ57U5AoDzRMcFKtsF7tOAUvbgdW8Aw00lAWII4A2"
                token= {tokenHandler}
            />
        </div>
    );
}

export default Checkout;
