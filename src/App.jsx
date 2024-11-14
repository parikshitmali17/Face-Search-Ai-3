
import './App.css';
import Navbar from "./Components/Navbar.jsx";
import HeroSection from './Components/HeroSection.jsx';
//import Carousel from './Components/Carousel.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import CenteredHeading from './Components/Heading.jsx';
import PaymentForm from './Components/PaymentForm.jsx';



function App() {
  return (
  
   <div>
    <Navbar/>
    <HeroSection/>
  
  <Card/>
  <PaymentForm/>
  
  <Footer/>
  

   </div>
  );
}

export default App;
