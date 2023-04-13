import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main"; 
import Footer from "./components/Footer";
import PropertyType from "./components/PropertyType"; 



function App() {
  return (
    <div className="app">
        <Navbar />
        <Main />
        <PropertyType />
        <Footer />
    </div>
  );
}

export default App;
