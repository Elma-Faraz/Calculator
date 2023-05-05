import React from "react";

import Output from "../Output/Output";

const OutputScreen = (props) => {
    return(
        <>
          <div className="screen">
             <Output value = {props.equation}/>
             <Output value = {props.display}/>
          </div>
        </>
    );
}

export default OutputScreen;