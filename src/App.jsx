
// import './App.css';
// import Navbar from "./Components/Navbar.jsx";
// import HeroSection from './Components/HeroSection.jsx';
// //import Carousel from './Components/Carousel.jsx';
// import Card from './Components/Card.jsx';
// import Footer from './Components/Footer.jsx';
// import CenteredHeading from './Components/Heading.jsx';
// import PaymentForm from './Components/PaymentForm.jsx';
// import UsersList from './Components/UserList.jsx';
// import ImageVideoUpload from './Components/ImageVideoUpload.jsx';
// import ImageResult from './Components/ImageResult.jsx';
// import React, { useState } from 'react';



// function App() {

//   const [showImageResult, setShowImageReult] = useState(false);

//   const handleClick = () => {
//     setShowImageReult(true);
//   };
//   return (
  
//    <div>
//     <Navbar/>
//     <HeroSection/>
  
//   <Card/>
//   <PaymentForm/>
//   <UsersList/>
//   <ImageVideoUpload/>
//   <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       {/* <h1>Welcome to the React App</h1> */}
//       <button onClick={handleClick}>Search </button>

//       {/* Conditionally render the NewComponent */}
//       {showImageResult && <ImageResult/>}
//     </div>
  
//   <Footer/>
  

//    </div>
//   );
// }

// export default App;



// // App.js
// import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import HeroSection from './Components/HeroSection';
// import Card from './Components/Card';
// import Footer from './Components/Footer';
// import CenteredHeading from './Components/Heading';
// import PaymentForm from './Components/PaymentForm';
// import UsersList from './Components/UserList';
// import ImageVideoUpload from './Components/ImageVideoUpload';
// import ImageResult from './Components/ImageResult';

// function App() {
//   const [showImageResult, setShowImageResult] = useState(false);

//   const handleClick = () => {
//     setShowImageResult(true);
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <HeroSection />
//             <Card />
//             {/* <PaymentForm /> */}
//             <ImageVideoUpload />
//             <div style={{ textAlign: 'center', marginTop: '50px' }}>
//               <button onClick={handleClick}>Search</button>
//               {showImageResult && <ImageResult />}
//             </div>
//             <Footer />
//           </>
//         } />
//         <Route path="/users" element={<UsersList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




//33

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
      </Routes>
    </Router>
  );
}

export default App;
