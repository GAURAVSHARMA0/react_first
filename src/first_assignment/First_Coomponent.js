import React from 'react';
import ChildComponent from './Child_component';

class First_component extends React.Component{
    constructor(){
        super();
        this.state ={
            Component_no: "First",
            previeou_value :"1",
            name :"name",
            age: "23",
            fathername: "father"
        }
    }

    //state = {
    //    Component_no: "First1",
    //}

    switchHandler =() =>{
        this.setState({
            Component_no: this.state.previeou_value,
            previeou_value: this.state.Component_no
        })
    }

    useBindHandler =(changeval) =>{
        this.setState({
            Component_no: changeval
        })
    }

    onChangeHandler =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render(){
        const style ={
                backgroundColor: '#4CAF50',
                border: 'none',
                color: 'white',
                padding: '15px 30px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                borderRadius: '4px',
                cursor: 'pointer'

        }
    
        return(
        <div>
        <h1>Component - {this.state.Component_no} 
        <button style={style} onClick={this.switchHandler}>click</button>
        </h1>
        <h2>
            <ChildComponent 
            First_component={this.state.Component_no}
            name={this.state.name}
            age={this.state.age}
            fathername={this.state.fathername}
            changevalue = {this.onChangeHandler} /></h2>
        <h3 onClick={this.useBindHandler.bind(this,'F1')}>Put Value(F1)</h3>
        <h3 onClick={() => this.useBindHandler('First')}>Put Value(First)</h3>
        </div>
        );
    }
}

export default First_component;