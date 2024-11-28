import React from "react";
import "./benefits.css"
import Stats from "../../components/Stats/Stats";

function Benefits () {
    return (
        <div className="container">
            <div className="benefits section row">
                <div className="benefits-img-container col-6">
                    <img 
                        className="benefits-img"
                        src="public/img/yoga-female-instructor.png" alt="" 
                    />
                </div>
                <div className="benefits-text col-6">
                    <h4>CHOOSE OM STUDIO</h4>
                    <div className="benefits-lower-text">
                        <h2 className="my-4">The best way to increased flexibility & improved posture</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim velit ut, iure provident quis officia explicabo saepe, aut incidunt molestias natus. Deleniti hic facere, a atque voluptatum maiores provident. Odit!</p>
                        <div className="benefits-stats">
                            <Stats 
                                statNumber={"350+"}
                                statText={"Happy Customers"} 
                            />
                            <Stats 
                                statNumber={"10"}
                                statText={"Amazing Intructors"} 
                            />
                            <Stats 
                                statNumber={"20"}
                                statText={"Years Experience"} 
                            />
                        </div>
                        <button className="btn-primary mt-4">Sign Up Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;