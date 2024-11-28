import React from "react";
import "./section-title.css"

function SectionTitle ( {subHeading, heading} ) {
    return (
        <div className="section-title">
            <h4 className="section-sub-title mb-2">{subHeading}</h4>
            <h3 className="section-title mb-4">{heading}</h3>
        </div>
    )
}

export default SectionTitle
