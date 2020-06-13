import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe needs the price in cents
  const publishablekey = 'pk_test_TeraEaxe9XspTaJvFz1XkgsJ00OIfSzS4r';

  const onToken = token => {
    console.log(token);
    alert('Payment successful!');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      decription={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
}

export default StripeCheckoutButton;