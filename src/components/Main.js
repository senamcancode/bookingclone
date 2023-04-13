import { Component } from "react";
import "./MainStyle.css"

class Main extends Component{
    render(){
        return(
            <main className="image-container">
                <div className="maintext">
                    <h3>Explore Italy</h3>
                    <div className = "top__image__container">
                    <div className ="top__firstImage">
                        <h2>Rome</h2>

                    </div>
                    <div className ="top__secondImage">
                        <h2>Milan</h2>
                    </div>
                    </div>
                    <div className = "bottom__image__container">
                    <div className ="bottom__firstImage">
                        <h2>Naples</h2>
                    </div>
                    <div className ="bottom__secondImage">
                        <h2>Florence</h2>
                    </div>
                    <div className ="bottom__thirdImage">
                        <h2>Bologna</h2>
                    </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default Main; 