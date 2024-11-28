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
                <button className="btn-primary shadow-btn">{CTA}</button>
            </div>
        </div>
    );
}

export default ContentBlock;
