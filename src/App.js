import './App.css';
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Accordion from "./components/Accordion"
import Main from "./components/Main"; 
import PropertyTypeCarousel from "./components/PropertyTypeCarousel";
import EmailSubmit from './components/EmailSubmit';
import Footer from "./components/Footer";



function App() {
  return (
    <div className="app">
        <Navbar />
        <Accordion />
        <Offers />
        <Main />
        <PropertyTypeCarousel />
        <EmailSubmit />
        <Footer />
    </div>
  );
}

export default App;
