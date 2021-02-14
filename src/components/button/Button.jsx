import React from "react";
import "./Button.scss";

function Button() {

    return (
            <button onClick={() => {
                console.log(123)
            }}>
                test
            </button>
    )
}


export default Button
