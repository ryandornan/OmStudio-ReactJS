import React from "react";
import "./benefit.css"

function Benefit ( {title, info}) {
    return (
        <div className="benefit">
            <img className="benefit-img" src="./img/lotus.png" alt="" />
            <span className="benefit-title">{title}</span>
            <span className="benefit-info">{info}</span>
        </div>
    )
}

export default Benefit