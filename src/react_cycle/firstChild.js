import React from 'react';
const FirstChild = (props) =>{
    console.log('IN [FirstChild] ===> function');
    return (
        <React.Fragment>
        <h1>hello</h1>
        <h1>{props.name}</h1>
        </React.Fragment>
    );
};

export default FirstChild;
