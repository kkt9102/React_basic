import React from "react";
// 랜더링시 아무것도 보여주지 않는다.
function grammar_2() {
    const name = 'React';
    return(
        <>
            {name === 'React' ? <h1>React입니다.</h1> : null}
        </>
    );
}

export default grammar_2;