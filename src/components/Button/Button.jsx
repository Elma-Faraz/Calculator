import React from "react";

import './styles.css';

const Button = (props) => {
    return(
        <>
          <input
           type="button"
           value={props.label}
           onClick = {props.Click}
          />
       </>
    );
}

export default Button;