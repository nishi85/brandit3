import React from "react";

const LogoMarkTwo = (props) => {
    return (
        <div className="logo-02-mark">
            <img src="./dev/assets/logo-02.svg" alt="" />
            <div className="logo-02">
                <img src={props.choice} alt="" />
            </div>
            <div className="logo-02-icon">
                <img src={props.choice} alt="" />
            </div>
            <h3 className={props.color}>{props.name}</h3>
        </div>
    )
}

export default LogoMarkTwo;
