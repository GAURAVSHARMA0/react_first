import React from 'react';
import './Person.css';
const person = props =>{
    return(
        <div className="Person">
            <input type ="text" onChange={props.iputbutton}  />
            <p onClick={props.click}>I'm {props.name} and my age {props.age}</p>
        </div>
    )
}

export default person;