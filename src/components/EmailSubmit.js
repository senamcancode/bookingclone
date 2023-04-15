import { Component } from "react";
import "./EmailSubmit.css";

class EmailSubmit extends Component{
    render(){
        return(
            <div className="emailsignup__container">
                <div>
                    <h3>Save time, save money!</h3>
                    <p>Sign up and we'll send the best deals to you</p>
                </div>
                <div className="emailsignup__component">
                   <label>
                        <input name="myInput" placeholder="Your email address" />
                    </label>
                   <button type="submit" id="subscribe__button">
                       Subscribe
                   </button>
                </div>
            </div>
        )}
}

export default EmailSubmit; 


