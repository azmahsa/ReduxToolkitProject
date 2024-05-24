import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

export const CkeckoutForm = ({total, handelPaymentSuccess}) => {
  const dispatch = useDispatch();
  const handleToken = (token) => {
    handelPaymentSuccess();
    dispatch(clearCart());
  };
  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey=""
        amount={total * 100}
        name="mahsacoder Ecommerce Website"
        email="Mahsaalizolfii2@gmail.com"
        description="Payment test using strip Ecommerce"
      >
        <button className="w-full bg-gra-200 py-3.5 my-3 font-medium">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
