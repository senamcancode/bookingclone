import { Component } from "react"; 
import CustomButton from "./CustomButton";
import "./OffersStyle.css";

class Offers extends Component{
    render (){
        return(
            <div className="offers">
                <div>
                    <h2>Offers</h2>
                    <p id="offerstxt">Promotions, deals and special offers for you</p>
                </div>
                <div className="flightandescape">
                    <div className="searchflights">
                            <h3>Fly away to your dream holiday</h3>
                            <p className="flightandescapetext">Get inspired, compare and book flights with more flexibility</p>
                            <CustomButton buttonText={"Search for flights"} />
                    </div>
                    <div className="escape">
                        <h3>Escape for a while</h3>
                        <p className="flightandescapetext">Enjoy the freedom of a monthly stay on Booking.com</p>
                        <CustomButton buttonText={"Discover monthly stays"} />
                    </div>
                </div>
            </div>

            
        )
    }
}


export default Offers;