import React from "react";

import './styles.css';

const Title = (props) => {
    return(
     <div className="calculator-title">
         { props.value } 
     </div>   
    );
}

export default Title;