import React from "react";
import "./business.css"
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import SectionTitle from "../../components/Section Title/SectionTitle";

function Business () {
    return (
        <div className="container-full business">
            
            <div className="container section">
                <SectionTitle
                
                subHeading={"SAY HELLO"}
                heading={"Where To Find Us"}
                />
                <div className="business-info d-flex align-items-centre justify-content-between">

                    <BusinessCard
                    img={"/img/location.png"}
                    title={"Location"}
                    info={"8, Dufferin Court"}
                    moreInfo={"Bangor BT20 3BX"}
                    />
                    <BusinessCard
                    img={"/img/phone-call.png"}
                    title={"Phone"}
                    info={"028 9146 2888"}
                    moreInfo={"07581 182629"}
                    />
                    <BusinessCard
                    img={"/img/mail.png"}
                    title={"Email"}
                    info={"hello@omstudio.com"}
                    moreInfo={"info@ryandornan.com"}
                    />
                    <BusinessCard
                    img={"/img/clock.png"}
                    title={"Hours"}
                    info={"Monday - Friday"}
                    moreInfo={"10:00am - 16:00pm"}
                    />
                </div>

                

            </div>
        </div>
    )
}

export default Business;