import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems"; 



class Navbar extends Component{
    render(){
    return(
        <nav className="NavbarItems">
            <div className="topNavBar">
                <h1 className="navbar-logo">Looking.com</h1>
                <div className="navBarButtons">
                    <button>Register</button>
                    <button>Sign In</button> 
{/* we want to find a way to make a button component so that we can re-use it */}

                </div>
            </div>

            {/* <div className="menu-icons">
                    <i className ="fas fa-bars"></i>
                    <i className ="fas fa-times"></i>
            </div> refer to 51:23 of react website tutorial - beginner react JS responsive tour/travel project*/}
            
            <div className="bottomNavBar">
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                    <li key={index}>
                        <a className ={item.cName} href="/"><i className ={item.icon}></i>{item.title}</a> 
                    </li>
                    );
                })}
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