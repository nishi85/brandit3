import React from "react";

const InputText = props => (
    <input type={props.type} value={props.value} id={props.id} onChange={props.controlFunc} required />
);

export default InputText;