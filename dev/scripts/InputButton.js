import React from "react";

const InputButton = props => (
    <input type={props.type} value={props.value} id={props.id} onChange={props.controlFunc} required />
);

export default InputButton;