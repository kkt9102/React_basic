import React from "react";

function inlineStyle_ver_02(){
    const name = 'React';
    return (
        <div
        style={{
            background: 'black',
            color: 'aqua',
            fontSize: '48px',
            fontWeight: 'bold',
            padding: 16                 // 단위 생략 시 자동으로 px로 인식
        }}
        >
            <div>{name}</div>
        </div>
    )
}

export default inlineStyle_ver_02;