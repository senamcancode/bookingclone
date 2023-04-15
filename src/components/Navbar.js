import { Component } from "react";
import "./NavbarStyles.css"; 
import CustomButton from "./CustomButton";



class Navbar extends Component{
    render(){
    return(
        <nav className="NavbarItems">
            <div className="topNavBar">
                <h1 className="navbar-logo">Looking.com</h1>
                <div className="navBarButtons">
                    <CustomButton buttonText="Register" />
                    <CustomButton buttonText="Sign In" />
{/* we want to find a way to make a button component so that we can re-use it */}

                </div>
            </div>
            <div className="bottomNavBar">
            <ul className="nav-menu">   
                    <li className ="nav-links">Stays</li>
                    <li className ="nav-links">Flights</li>
                    <li className ="nav-links">Flight + Hotel</li>
                    <li className ="nav-links">Car rentals</li>
                    <li className ="nav-links">Attractions</li>
                    <li className ="nav-links">Airport taxis</li>
            </ul>
            </div>
            <div className="navBarText">
                <h2>Find your next stay</h2>
                <p>Search deals on hotels, homes, and much more...</p>
            </div>
        </nav>
        )
    }
}

export default Navbar; 



