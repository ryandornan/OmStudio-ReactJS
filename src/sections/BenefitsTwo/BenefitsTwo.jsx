import React from "react";
import "./benefits-two.css";
import Benefit from "../../components/Benefit/Benefit";

function BenefitsTwo() {
    return (
        <div className="container-full benefits-two" id="classes">
            <div className="container section">
                {/* Row to Structure Header and Benefits */}
                <div className="row">
                    <div className="col-12">
                        {/* Centered Header */}
                        <h3>
                            Yoga is an <span>ancient practice</span> that unites the body & spirit
                            through exercise, breathing techniques & meditation
                        </h3>
                    </div>
                </div>
                <div className="yoga-benefits">
                    <Benefit
                        title={"Mental Practice"}
                        info={"One of the most appealing aspects of yoga is its accessibility."}
                    />
                    <Benefit
                        title={"Stress Relief"}
                        info={"Yoga is a versatile and the transformative body practice."}
                    />
                    <Benefit
                        title={"Balance Nutrition"}
                        info={"The meditative practices in yoga make help quiet the mind."}
                    />
                    <Benefit
                        title={"Meditation"}
                        info={"This inner tranquility can carry over into everyday life."}
                    />
                </div>
            </div>
        </div>
    );
}

export default BenefitsTwo;
