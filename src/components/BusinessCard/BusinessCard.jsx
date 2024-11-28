import React from "react";
import "./business-card.css"

function BusinessCard ( {img, title, info, moreInfo} ) {
    return (
        <div className="testimonials-card col-3">

            <img className="business-card-img mb-2" src={img} alt=""></img>
            <h4 className="contact-type">{title}</h4>
            <p className="info-one">{info}</p>
            <p className="info-two mb-4">{moreInfo}</p>
        </div>
    )
}

export default BusinessCard;

