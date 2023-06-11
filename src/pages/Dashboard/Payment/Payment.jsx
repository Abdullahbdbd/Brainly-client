import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useSelectedClass from '../../../hooks/useSelectedClass';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selectedClass] = useSelectedClass();
    const total = selectedClass.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2>Teka tuka</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;