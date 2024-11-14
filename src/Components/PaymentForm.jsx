// // PaymentForm.js
// import React, { useState,useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from "axios";

// // Replace with your publishable key
// const stripePromise = loadStripe('pk_test_51QKhjY05k7GGw7ueWQafCcuBGHhl2OHf8zU41u3OtF3etHL2yJYaAeAXArOJQD0E7iqoGJjAPsdbzmvUQzpjgnxD00WYuAGUs7');

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [status, setStatus] = useState('');
//   const [clientSecret, setClientSecret] = useState('');

//   //Fetch the clientSecret from backend
//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       const response = await axios.post('http://localhost:3001/create-payment-intent', {
//         amount: 1000, // Amount in cents
//       });
//       setClientSecret(response.data.clientSecret);
//     };
//     fetchClientSecret();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) return;

//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       '{CLIENT_SECRET_FROM_BACKEND}',
//       {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       }
//     );

//     if (error) {
//       setStatus(`Payment failed: ${error.message}`);
//     } else if (paymentIntent.status === 'succeeded') {
//       setStatus('Payment successful!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//       <div>{status}</div>
//     </form>
//   );
// }

// function PaymentForm() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }

// export default PaymentForm;




// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// const stripePromise = loadStripe('pk_test_51QKhjY05k7GGw7ueWQafCcuBGHhl2OHf8zU41u3OtF3etHL2yJYaAeAXArOJQD0E7iqoGJjAPsdbzmvUQzpjgnxD00WYuAGUs7');

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       const response = await axios.post('http://localhost:5000/create-payment-intent', {
//         amount: 1000,
//       });
//       setClientSecret(response.data.clientSecret);
//       console.log(clientSecret);
//       console.log(response.data.clientSecret);
//     };
//     fetchClientSecret();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("pay was clicked")
//      // Debugging: Check if stripe and elements are properly initialized
//   console.log('stripe:', stripe);
//   console.log('elements:', elements);

//     if (!stripe || !elements || !clientSecret) return;
//     console.log("Stripe, Elements, or clientSecret not initialized.");

//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       setStatus(`Payment failed: ${error.message}`);
//     } else if (paymentIntent.status === 'succeeded') {
//       setStatus('Payment successful!');
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="card shadow-lg" style={{ width: '400px', padding: '20px' }}>
//         <div className="card-body">
//           <h5 className="card-title text-center mb-4">Complete Your Payment</h5>
//           <form onSubmit={handleSubmit}>
//             <CardElement className="mb-3" />
//             <button type="submit" className="btn btn-primary w-100" disabled={!stripe}>
//               Pay
//             </button>
//           </form>
//           <div className="mt-3 text-center text-success">{status}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaymentForm() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }

// export default PaymentForm;

//pk_test_51QKhjY05k7GGw7ueWQafCcuBGHhl2OHf8zU41u3OtF3etHL2yJYaAeAXArOJQD0E7iqoGJjAPsdbzmvUQzpjgnxD00WYuAGUs7

// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// // Load Stripe.js with your public key
// const stripePromise = loadStripe('pk_test_51QKhjY05k7GGw7ueWQafCcuBGHhl2OHf8zU41u3OtF3etHL2yJYaAeAXArOJQD0E7iqoGJjAPsdbzmvUQzpjgnxD00WYuAGUs7');

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [status, setStatus] = useState('');
//   const [isReady, setIsReady] = useState(false);  // New state to track Stripe readiness

//   // Fetch client secret on mount
//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/create-payment-intent', {
//           amount: 1000,
//         });
//         setClientSecret(response.data.clientSecret);
//         console.log("Client Secret fetched:", response.data.clientSecret);
//       } catch (error) {
//         console.error("Error fetching client secret:", error);
//       }
//     };

//     fetchClientSecret();
//   }, []);

//   // Wait for Stripe and Elements to be ready
//   useEffect(() => {
//     if (stripe && elements) {
//       setIsReady(true);  // Set ready state once stripe and elements are available
//     }
//   }, [stripe, elements]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Debug logs to check if stripe, elements, or clientSecret are not initialized
//     console.log("stripe initialized:", stripe);
//     console.log("elements initialized:", elements);
//     console.log("clientSecret:", clientSecret);

//     if (!stripe || !elements || !clientSecret) {
//       console.log("Stripe, Elements, or clientSecret not initialized.");
//       return;
//     }

//     console.log("Pay button clicked");

//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       setStatus(`Payment failed: ${error.message}`);
//     } else if (paymentIntent.status === 'succeeded') {
//       setStatus('Payment successful!');
//     }
//   };

//   if (!isReady) {
//     return <div>Loading Stripe...</div>;  // Loading indicator until Stripe and Elements are ready
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="card shadow-lg" style={{ width: '400px', padding: '20px' }}>
//         <div className="card-body">
//           <h5 className="card-title text-center mb-4">Complete Your Payment</h5>
//           <form onSubmit={handleSubmit}>
//             <CardElement className="mb-3" />
//             <button type="submit" className="btn btn-primary w-100" disabled={!stripe || !elements}>
//               Pay
//             </button>
//           </form>
//           <div className="mt-3 text-center text-success">{status}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaymentForm() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }

// export default PaymentForm;


// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// // Load Stripe with your public key
// const stripePromise = loadStripe('pk_test_51QKhjY05k7GGw7ueWQafCcuBGHhl2OHf8zU41u3OtF3etHL2yJYaAeAXArOJQD0E7iqoGJjAPsdbzmvUQzpjgnxD00WYuAGUs7');

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [status, setStatus] = useState('');

//   // Fetch the client secret when the component mounts
//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/create-payment-intent', {
//           amount: 1000,  // Amount in cents (1000 = $10.00)
//         });
//         setClientSecret(response.data.clientSecret);
//         console.log('Client Secret:', response.data.clientSecret); // Log the clientSecret for debugging
//         console.log("Client Secret Response:", response.data.clientSecret);
//       } catch (error) {
//         console.error('Error fetching client secret:', error);
//       }
//     };

//     fetchClientSecret();
//   }, []);  // Empty dependency array to run once when the component mounts

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   console.log('Pay was clicked');

//   //   if (!stripe || !elements || !clientSecret) {
//   //     console.log('Stripe, Elements, or clientSecret not initialized.');
//   //     return;
//   //   }

//   //   const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//   //     payment_method: {
//   //       card: elements.getElement(CardElement),
//   //     },
//   //   });

//   //   if (error) {
//   //     setStatus(`Payment failed: ${error.message}`);
//   //   } else if (paymentIntent.status === 'succeeded') {
//   //     setStatus('Payment successful!');
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("Pay was clicked");
  
//     if (!stripe || !elements || !clientSecret) {
//       console.log("Stripe, Elements, or clientSecret not initialized.");
//       return;
//     }
  
//     // Confirm the payment with the client secret
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });
  
//     if (error) {
//       setStatus(`Payment failed: ${error.message}`);
//       console.log("Payment failed", error);
//     } else if (paymentIntent.status === 'succeeded') {
//       setStatus('Payment successful!');
//       console.log("Payment successful!", paymentIntent);
//     } else {
//       setStatus(`Payment failed: ${paymentIntent.status}`);
//       console.log("Payment failed with status", paymentIntent.status);
//     }
//   };
  

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="card shadow-lg" style={{ width: '400px', padding: '20px' }}>
//         <div className="card-body">
//           <h5 className="card-title text-center mb-4">Complete Your Payment</h5>
//           <form onSubmit={handleSubmit}>
//             <CardElement className="mb-3" />
//             <button type="submit" className="btn btn-primary w-100" disabled={!stripe}>
//               Pay
//             </button>
//           </form>
//           <div className="mt-3 text-center text-success">{status}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaymentForm() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }

// export default PaymentForm;



// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// const stripePromise = loadStripe('pk_test_51QKhjY05k7GGw7ueWQafCcuBGHhl2OHf8zU41u3OtF3etHL2yJYaAeAXArOJQD0E7iqoGJjAPsdbzmvUQzpjgnxD00WYuAGUs7');
// const BASEURL="https://api.stripe.com";
// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [status, setStatus] = useState('');

//   // Fetch clientSecret from the backend when the component mounts
//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         // const response = await axios.post('http://localhost:5000/create-payment-intent', {
//         //   amount: 1000, // Amount in cents (e.g., $10.00)
//         // });

//         const response = await axios.post(`${BASEURL}/create-payment-intent`, {
//           amount: 1000, // Amount in cents (e.g., $10.00)
//         });
        
        
//         console.log('Client Secret from backend:', response.data.clientSecret);
//         setClientSecret(response.data.clientSecret); // Store the clientSecret in state
//       } catch (error) {
//         console.error('Error fetching client secret:', error);
//       }
//     };
    
//     fetchClientSecret();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       console.log('Stripe or Elements or clientSecret not initialized.');
//       return;
//     }

//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       setStatus(`Payment failed: ${error.message}`);
//     } else if (paymentIntent.status === 'succeeded') {
//       setStatus('Payment successful!');
//       console.log('Payment successful!', paymentIntent);
//     }
//   };

//   return (
    // <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    //   <div className="card shadow-lg" style={{ width: '400px', padding: '20px' }}>
    //     <div className="card-body">
    //       <h5 className="card-title text-center mb-4">Complete Your Payment</h5>
    //       <form onSubmit={handleSubmit}>
    //         <CardElement className="mb-3" />
    //         <button type="submit" className="btn btn-primary w-100" disabled={!stripe}>
    //           Pay
    //         </button>
    //       </form>
    //       <div className="mt-3 text-center text-success">{status}</div>
    //     </div>
    //   </div>
    // </div>
//   );
// }

// function PaymentForm() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }

// export default PaymentForm;





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