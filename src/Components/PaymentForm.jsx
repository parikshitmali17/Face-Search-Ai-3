
import React from 'react';
import axios from 'axios';

function PaymentForm() {
  const buyFunction = async () => {
    try {
      const response = await axios.post('http://localhost:3000/payment');
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center">Buy  100 Image Ai Search Credit</h1>
      <button onClick={buyFunction}>Buy Now</button>
    </div>
  );
}

export default PaymentForm;