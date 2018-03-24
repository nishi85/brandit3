import React from "react";

const LogoMarkThree = props => {
  return <div className="logo-03-mark">
      <img src="./public/assets/logo-03.svg" alt="" />
      <div className="logo-03">
        <img src={props.choice} alt="" />
      </div>
      <h3 className={props.color}>{props.name}</h3>
      <button className="deleteBTN" onClick={() => props.remove(props.choiceKey, props.nameKey, props.colorKey, props.logoKey)}>
        Delete
      </button>
    </div>;
};

export default LogoMarkThree;
