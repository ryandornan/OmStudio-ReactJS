import React from "react";
import "./content-block.css";

function ContentBlock({ subheading, heading, CTA, backgroundImage }) {
    return (
        <div
            className="content-block"
        >
            <div className="container section">
                <h5>{subheading}</h5>
                <h2>{heading}</h2>
                <a href="#contact">
                    <button className="btn-primary shadow-btn">{CTA}</button>
                </a>
            </div>
        </div>
    );
}

export default ContentBlock;
