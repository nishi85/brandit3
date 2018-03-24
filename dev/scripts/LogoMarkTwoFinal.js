import React from "react";

const LogoMarkTwoFinal = props => {
  return <div className="logo-02-mark">
      <img src="./public/assets/logo-02.svg" alt="" />
      <div className="logo-02">
        <img src={props.choice} alt="" />
      </div>
      <div className="logo-02-icon">
        <img src={props.choice} alt="" />
      </div>
      <h3 className={props.color}>{props.name}</h3>
      <button className="deleteBTN" onClick={() => props.remove(props.choiceKey, props.nameKey, props.colorKey, props.logoKey)}>
        Delete
      </button>
    </div>;
};

export default LogoMarkTwoFinal;
