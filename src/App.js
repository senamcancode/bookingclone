import './App.css';
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Accordion from "./components/Accordion"
import Main from "./components/Main"; 
import PropertyTypeCarousel from "./components/PropertyTypeCarousel";
import EmailSubmitForm from './components/EmailSubmitForm';
import Footer from "./components/Footer";



function App() {
  return (
    <div className="app">
        <Navbar />
        <Accordion />
        <Offers />
        <Main />
        <PropertyTypeCarousel />
        <EmailSubmitForm />
        <Footer />
    </div>
  );
}

export default App;
