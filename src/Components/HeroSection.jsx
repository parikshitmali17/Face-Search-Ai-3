
// HeroSection.jsx
import React from 'react';
import axios from 'axios';

export default function HeroSection({ onScrollToUpload }) {
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
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="/Images/HeroAi.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"> What is FacesearchAI ?</h1>
          <p className="lead">
            It's an AI tool that can find any face across the web using an image or video. It provides the corresponding website link, name of the person,
            creates a customized poem, and more. It can even find contact details (email and phone number) just by entering the person's name.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={onScrollToUpload}>Try Face Search AI</button>
            <button onClick={buyFunction} type="button" className="btn btn-outline-secondary btn-lg px-4">Buy Image Search Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
