import React from "react";

const LogoMarkOne = (props) => {
    
    return (
        <div className="logo-01-mark">
            <img src="./dev/assets/logo-01.svg" alt="" />
            <div className="logo-01">
                <img src={props.choice} alt="" />
            </div>
            <div className="logo-01-icon">
                <img src={props.choice} alt="" />
            </div>
            <h3 className ={props.color} >{props.name}</h3>
        </div>
    )
}

export default LogoMarkOne;
