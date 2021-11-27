import React from "react";
// 랜더링시 아무것도 보여주지 않는다.
function grammar_3() {
    const name = 'React';
    return(
        <>
            <div>Grammar_2 보다 더 간단한 코드</div>
            {name === 'React' && <h1>React입니다.</h1>}
        </>
    );
}

export default grammar_3;