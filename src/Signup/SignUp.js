import React from 'react';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state ={
            name :"",
            age: "",
            fathername: "",
            password:""
        }
    }

    onChangeHandler =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    SubmitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
        // const data = new FormData(e.target);
        // fetch('',{
        //     method:'GET',
        //     body:data,
        // })

    }
    
    render(){
        const style ={
                backgroundColor: '#2e6da4',
                border: 'none',
                color: 'white',
                padding: '12px 25px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '16px 2px',
                borderRadius: '4px',
                cursor: 'pointer'

        }
    

        return(
        <form onSubmit={this.SubmitHandler}>
            <div>
                <p>Enter your name</p>
                <input type="text" name="name" onChange={this.onChangeHandler}/>
                <p>Enter your age is</p>
                <input type="text" name="age" onChange={this.onChangeHandler} />
                <p>Enter your father's name</p>
                <input type="text" name="fathername" onChange={this.onChangeHandler} />
                <p>Enter Password</p>
                <input type="password" name="password" onChange={this.onChangeHandler} /><br/>
                <button style={style}>SUBMIT</button>
            </div>
        </form>
        );
    }
}

export default SignUp;