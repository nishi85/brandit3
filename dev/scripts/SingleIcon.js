import React from "react";

const SingleIcon = props => {
    return (
        <div>
            <img src={props.icon.preview_url} alt={props.icon.attribution} />
        </div>
    )
};
export default SingleIcon;

