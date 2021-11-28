import React from "react";

function inlineStyle(){
    const name = 'React';
    const style ={
        background: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16                 // 단위 생략 시 자동으로 px로 인식
    };
    return (
        <>
            <div>{name}</div>
        </>
    )
}

export default inlineStyle;