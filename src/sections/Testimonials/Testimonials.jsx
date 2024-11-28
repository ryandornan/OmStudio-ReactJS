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

            <div className="testimonals d-flex align-items-centre justify-content-between">

                <TestimonialsCard
                quote={
                    "I can't recommend this enough! The environment is so welcoming, and every session feels tailored to my needs. It's the perfect escape from a busy schedule."
                }
                img={"/img/yoga-testimonial-02.png"}
                name={"Oliver Bennett"}
                />

                <TestimonialsCard
                quote={"Service was exceptional, and it's clear that you have a genuine passion for what you do. The attention to detall made it truly memorable."}
                img={"/img/yoga-instructor-03.png"}
                name={"Eliza Rose"}
                />

                <TestimonialsCard
                quote={
                    "Each session brings a sense of peace and clarity that stays with me long after. The team truly understands the importance of mind-body connection."
                }
                img={"/img/yoga-testimonial-03.png"}
                name={"Samuel Carter"}
                />

            </div>
            
        </div>
    ) 
}

export default Testimonials;