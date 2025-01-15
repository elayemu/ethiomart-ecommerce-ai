import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_public_key_here'); // Update with your actual key.

async function handleCheckout() {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_id', quantity: 1 }],
        mode: 'payment',
        successUrl: 'https://example.com/success',
        cancelUrl: 'https://example.com/cancel',
    });
    if (error) {
        console.error(error);
    }
}

export default handleCheckout;