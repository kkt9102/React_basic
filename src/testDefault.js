import React from "react";

const testDefault = props => {
    return <div>이 값은 기본 default props 값을 지정합니다. 현재 기본 props 값음 {props.name} 입니다.</div>;
};
testDefault.defaultProps = {
    name: '기본값'
};

export default testDefault;