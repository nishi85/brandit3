import React from "react";

import H2Text from "./H2Text";

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div className="about">
                    <div className="about-image">
                        <img src="./dev/assets/brandItLogoOrange.png" alt="" />
                    </div>
                    <div className="about-text">
                        <H2Text className={'mainFont'} text={'About BrandIt'} />
                        <p>BrandIt custom design was created by three designers and developers in 2014. Based in Toronto, Ontario the company creates bespoke logos for brands globally.</p>
                        <p>In 2018, BrandIt introduced their custom logo generating web application, providing clients with a more hands on approach to the design process.</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default About;
