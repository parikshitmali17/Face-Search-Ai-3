// App.js
import './App.css';
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Card from './Components/Card';
import Footer from './Components/Footer';
import CenteredHeading from './Components/Heading';
import PaymentForm from './Components/PaymentForm';
import UsersList from './Components/UserList';
import ImageVideoUpload from './Components/ImageVideoUpload';
import ImageResult from './Components/ImageResult';
import PaymentSuccess from './Components/PaymentSuccess';

function App() {
  const [showImageResult, setShowImageResult] = useState(false);
  const imageVideoUploadRef = useRef(null);

  const handleScrollToUpload = () => {
    imageVideoUploadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = () => {
    setShowImageResult(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection onScrollToUpload={handleScrollToUpload} />
            <Card />
            <div ref={imageVideoUploadRef}>
              <ImageVideoUpload />
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <button onClick={handleClick}>Search</button>
              {showImageResult && <ImageResult />}
            </div>
            <Footer />
          </>
        } />
        <Route path="/users" element={<UsersList />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
