import React from "react";

function closeElmt(){
    const name = 'React';
    return (
        <>
        <div>{name}</div>
            <input></input>
            <div>Failed to compile.</div>
            <div>Parsing error: Unterminated JSX contents</div>
        </>
    )
}

export default closeElmt;