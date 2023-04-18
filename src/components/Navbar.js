import { Component } from "react";
import "./NavbarStyles.css"; 
import CustomButton from "./CustomButton";
import {AiOutlineHome} from 'react-icons/ai'
import {TbPlaneInflight} from 'react-icons/tb'
import {MdTravelExplore} from 'react-icons/md'
import {AiOutlineCar} from 'react-icons/ai'
import {MdOutlineAttractions} from 'react-icons/md'
import {MdOutlineTaxiAlert} from 'react-icons/md'


class Navbar extends Component{
    render(){
    return(
        <nav className="NavbarItems">
            <div className="topNavBar">
                <h1 className="navbar-logo">Looking.com</h1>
                <div className="navBarButtons">
                    <CustomButton buttonText="Register" />
                    <CustomButton buttonText="Sign In" />
                </div>
            </div>
            <div className="bottomNavBar">
            <ul className="nav-menu">   
                    <li className ="nav-links"><AiOutlineHome /> Stays</li>
                    <li className ="nav-links"><TbPlaneInflight /> Flights</li>
                    <li className ="nav-links"><MdTravelExplore />Flight + Hotel</li>
                    <li className ="nav-links"><AiOutlineCar /> Car rentals</li>
                    <li className ="nav-links"><MdOutlineAttractions /> Attractions</li>
                    <li className ="nav-links"><MdOutlineTaxiAlert /> Airport taxis</li>
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



