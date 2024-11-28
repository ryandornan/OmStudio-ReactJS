import React from "react";
import "./testimonials-card.css"

function TestimonialsCard ( {quote, img, name} ) {
    return (
        <div className="testimonials-card col-3">

            <img className="testimonial-img mb-4" src={img} alt=""></img>
            <p className="quote mb-4">"{quote}"</p>
            <h4>{name}</h4>
        </div>
    )
}

export default TestimonialsCard;