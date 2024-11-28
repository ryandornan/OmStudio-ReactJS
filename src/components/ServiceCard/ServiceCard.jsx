import React from "react";
import "./service-card.css"

function ServiceCard ( {img, title, info, price} ) {
    return (
        <div className="service-card col-3">
            <img className="service-card-img mb-4" src={img} alt="" />
            <h4 className="mb-3">{title}</h4>
            <p className="mb-3">{info}</p>
            <h4 className="mb-3">{price}</h4>
        </div>
    )
}

export default ServiceCard;