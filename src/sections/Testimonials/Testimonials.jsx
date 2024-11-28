import React from "react";
import "./testimonials.css"
import SectionTitle from "../../components/Section Title/SectionTitle";
import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";

function Testimonials () {
    return (
        <div className="container section">
            <SectionTitle
            subHeading={"TESTIMONIALS"}
            heading={"What Our Clients Say"}
            />
            <TestimonialsCard
            quote={"Service was exceptional, and it's clear that you have a genuine passion for what vou do. The attention to detall and willingness to personalize the experience made it truly memorable."}
            img={"public/img/yoga-instructor-03.png"}
            name={"Eliza Rose"}
            />
            
        </div>
    ) 
}

export default Testimonials;