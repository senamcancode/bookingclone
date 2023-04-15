import { Component } from "react";
import hotels from "./images/Carousel_Images/hotels.jpeg"
import appartments from "./images/Carousel_Images/appartments.jpeg"
import resorts from "./images/Carousel_Images/resorts.jpeg"
import villas from "./images/Carousel_Images/villas.jpeg"
import backbutton from "./images/Carousel_Images/backbutton.png"
import "./PropertyTypeCarouselStyles.css"


class PropertyTypeCarousel extends Component{
    render(){
    return(
        <div className = "property__container">
            <div> 
                <h2>Browse by property type </h2>
            </div>
            <div className ="carousel__wrapper">
                <div className="carousel">
                    <div className="hotels">
                    <img src={hotels} alt="hotelimg"/>
                    <h4>Hotels</h4>
                    <p>956,351 hotels</p>
                    </div>
                    <div className="appartments">
                        <img src={appartments} />
                        <h4>Appartments</h4>
                        <p>1,043,200 appartments</p>   
                    </div>
                    <div className="resorts">
                        <img src={resorts} alt="resortimg" />
                        <h4>Resorts</h4>
                        <p>19,189 resorts</p>
                    </div>
                    <div className="villas">
                        <img src={villas} alt="villaimg"/>
                        <h4>Villas</h4>
                        <p>559,872 villas</p>
                    </div>
                </div>
                <div>
                    <img src={backbutton} className="carouselbkbuttonimg"/>
                </div>
            </div>
        </div>
    )}}




export default PropertyTypeCarousel;