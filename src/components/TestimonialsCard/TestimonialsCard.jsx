import React from "react";
import "./testimonials-card.css"

function TestimonialsCard ( {quote, img, name} ) {
    return (
        <div className="testimonials-card">

            <p className="quote mb-4">"{quote}"</p>
            <img className="testimonial-img mb-4" src={img} alt=""></img>
            <h4>{name}</h4>
        </div>
    )
}

export default TestimonialsCard;