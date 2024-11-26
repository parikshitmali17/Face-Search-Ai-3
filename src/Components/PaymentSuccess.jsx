import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/'); // Redirects to the home page or desired route
  };

  return (
    <div className="success-container">
      <div className="success-content">
        {/* <img
          src="https://img.icons8.com/external-flat-wichaiwi/64/000000/external-check-flat-wichaiwi.png"
          alt="Success Icon"
          className="success-icon"
        /> */}
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your transaction was completed successfully.</p>
        <button className="return-button" onClick={handleReturnHome}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
