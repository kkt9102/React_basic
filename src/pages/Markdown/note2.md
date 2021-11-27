## JSX용 삼항연산자
```javascript
import React from 'react';

function App() {
    const name = 'React';
    return (
        <>
        {name === 'React' ? (
            <h1>React입니다.</h1>
        ) : (
            <h2>React가 아닙니다.</h2>
        )}
    );
}

export default App;
```
 - 위와같은 코드를 작성한 후 브라우저에서 실행해보면 'React입니다.' 라는 문구가 출력된다. 하지만 'const name = 'React';' 에서  name 값을 다르게 지정해주면 'React가 아닙니다.'라는 문구가 출력된다.