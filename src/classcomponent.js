import React, {Component} from "react";

function codeView() {
    return (
        <>
            <div>import React from 'react';</div>
            <div>import MyComponent from './MyComponent';</div>
            <br></br>
            <div>cosnt App = () =&gt; &#123;</div>
            <div>&nbsp;return &lt;MyComponent /&gt;</div>
            <div>&#125;;</div>
            <br></br>
            <div>export default App;</div>
        </>
    )
}

export default codeView;