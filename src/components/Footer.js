import { Component } from "react";
import "./FooterStyle.css"; 
import affiliateimage from "./images/affiliatecompaniesimg.png"; 


class Footer extends Component{
    render(){
    return(
        <footer className="footer">
            <div className="footercontainertop">
                <div className="listyourproperty">
                    <p>List your property </p>
                </div>
                <div className="footerlinks">
                    <ul className="customerlinks">
                        <li>Mobile version</li>
                        <li>Manage your bookings</li>
                        <li>Customer Service Help</li>
                        <li>Become an affiliate</li>
                        <li>Booking.com for Business</li>
                    </ul>
                </div>
                <div className="footercontainerbottom">
                    <div className="copyrightinfo">
                        <p className="extranetlogin">Extranet Log-in</p>
                        <p>Copyright<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                        1996-2023 Looking.com<span dangerouslySetInnerHTML={{ "__html": "&trade;" }} />. All rights reserved. </p>
                    </div>
                    <div className="affiliatecompanies">
                        <p>Looking.com is part of Looking Holdings Inc., the world leader in online travel and related services. </p>
                    </div>
                    <div className="affiliateimages">
                        <img src={affiliateimage} alt="affiliatecompanies" className="affimages"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
}

export default Footer; 