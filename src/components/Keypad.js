// Code Keypad Component Here
import React from "react";


function Keypad (){
    // define the function for the event handler after writing the input
    const handleChange = (event) => {console.log ("Entering password...")};
    return (
        <div>
            {/* after defining the event handler function, i will attach the onChange event to the input */}
            <input type= "password"  onChange= {handleChange} />
        </div>
    )
}

export default Keypad;