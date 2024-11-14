
import './App.css';
import Navbar from "./Components/Navbar.jsx";
import HeroSection from './Components/HeroSection.jsx';
//import Carousel from './Components/Carousel.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import CenteredHeading from './Components/Heading.jsx';
import PaymentForm from './Components/PaymentForm.jsx';
import UsersList from './Components/UserList.jsx';
import ImageVideoUpload from './Components/ImageVideoUpload.jsx';
import ImageResult from './Components/ImageResult.jsx';
import React, { useState } from 'react';



function App() {

  const [showImageResult, setShowImageReult] = useState(false);

  const handleClick = () => {
    setShowImageReult(true);
  };
  return (
  
   <div>
    <Navbar/>
    <HeroSection/>
  
  <Card/>
  <PaymentForm/>
  <UsersList/>
  <ImageVideoUpload/>
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* <h1>Welcome to the React App</h1> */}
      <button onClick={handleClick}>Search </button>

      {/* Conditionally render the NewComponent */}
      {showImageResult && <ImageResult/>}
    </div>
  
  <Footer/>
  

   </div>
  );
}

export default App;
