import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";
import NumberForm from "./NumberForm";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [number, setNumber] = useState(0)

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    function handleNumberChange(e){
        const newNumber = e.target.value;
        if(newNumber <=5 && newNumber >= 0){
            setNumber(newNumber);
        }
    }


    return <div>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
        <DisplayData
            firstName={firstName}
            lastName={lastName} />
        <NumberForm 
        number = {number}
        handleNumberChange = {handleNumberChange}
        />
    </div>

}

export default ParentComponent
