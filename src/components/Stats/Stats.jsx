import React from "react";
import "./stats.css"

function Stats ( {statNumber, statText} ) {
    return (
        <div className="stat-container">
            <span className="stat-number">{statNumber}</span>
            <span className="stat-text">{statText}</span>
        </div>
    )
}

export default Stats;