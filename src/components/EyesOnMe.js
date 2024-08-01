// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    const handleFocus= () => {console.log("Good!")};

    const handleBlur = () => {console.log("Hey! Eyes on me!")};
    return (
        <div>
            {/* attach the events to the button */}
            <button onFocus = {handleFocus}  onBlur = {handleBlur}>Eyes on me</button>
        </div>
    )
}







export default EyesOnMe;