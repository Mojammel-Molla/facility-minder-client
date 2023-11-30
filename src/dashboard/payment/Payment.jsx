import { Elements } from '@stripe/react-stripe-js';
import DashboardTitle from './../../shared/DashboardTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETAWAY_KEY);
const Payment = () => {
  return (
    <div>
      <DashboardTitle title="Pay Here"></DashboardTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
