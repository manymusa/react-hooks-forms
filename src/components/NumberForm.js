import React from "react";

function NumberForm({number, handleNumberChange}){

    return (
        <form>
            <input type= "number" value = {number} onChange = {handleNumberChange}/>
        </form>
    )
}



export default NumberForm