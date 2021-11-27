import React from "react";
// undifined가 오류로 송출되지않고 정상 작동한다.
function grammar_5() {
    const name = 'undifined';
    return name || '값이 undifined입니다.';
}

export default grammar_5;