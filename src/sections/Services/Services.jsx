import React from "react";
import "./services.css"
import SectionTitle from "../../components/Section Title/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

function Services() {
    return (
        <div className="container section" id="services">
            {/* Section Title */}
            <SectionTitle
                className
                subHeading={"YOGA SERVICES"}
                heading={"What We Offer"}
            />
            
            {/* Introduction Paragraph */}
            <p className="mb-4">
                Originating in ancient India, yoga has gained immense popularity worldwide for its numerous
                physical, mental, and spiritual benefits.
            </p>

            {/* Service Cards */}
            <div className="service-cards">
                <ServiceCard
                    img={"/img/yoga-class-female-2.png"} 
                    title={"Hatha Yoga"}
                    info={"One of the most common forms of yoga, focusing on physical exercises and breathing techniques."}
                    price={"£25 p/hour"}
                />
                <ServiceCard
                    img={"/img/yoga-male-instructor.png"} 
                    title={"Ashtanga Yoga"}
                    info={"A rigorous and structured style that includes six series of poses performed in a specific order."}
                    price={"£14 p/hour"}
                />
                <ServiceCard
                    img={"/img/yoga-two-teachers.png"} 
                    title={"Kundalini Yoga"}
                    info={"This form of yoga combines physical exercises, breathing techniques, and mantras to awaken inner energy."}
                    price={"£19 p/hour"}
                />
            </div>
        </div>
    );
}

export default Services;