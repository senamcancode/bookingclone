import './App.css';
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import CovidAccordion from "./components/CovidAccordion"
import Main from "./components/Main"; 
import Footer from "./components/Footer";
import PropertyType from "./components/PropertyType"; 



function App() {
  return (
    <div className="app">
        <Navbar />
        <CovidAccordion />
        <Offers />
        <Main />
        <PropertyType />
        <Footer />
    </div>
  );
}

export default App;
