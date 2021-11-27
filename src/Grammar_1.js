import React from "react";

function grammar_1() {
    const name = 'React';
    return(
        <>
            {name === 'React' ? (
                <h1>React입니다.</h1>
            ) : (
                <h2>React가 아닙니다.</h2>
            )}
        </>
    );
}

export default grammar_1;