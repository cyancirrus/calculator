import React from 'react';


function greeting() {
    return 'hello world';
}

function sayHello() {
    return (
        <h1>{greeting()}</h1>
    )
}

export default sayHello;