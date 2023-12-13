import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements?email=${user?.email}`);
      return res.data;
    },
  });
  const totalPay = bookings.reduce((total, item) => total + item.rent, 0);

  useEffect(() => {
    if (totalPay > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: totalPay })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPay]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });
    if (confirmError) {
      console.log('confirm error');
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          price: totalPay,
          transactionId: paymentIntent.id,
          date: new Date(),
          bookingIds: bookings.map(item => item._id),
          status: 'pending',
        };
        const res = await axiosSecure.post('/payments', payment);
        console.log('Payment saved', res);
        alert('payment successful');
        navigate('/');
      }
    }
  };
  return (
    <div className="mt-5 p-5">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn mt-4 w-20 bg-[#08a8e4]"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">Your transaction id:{transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
