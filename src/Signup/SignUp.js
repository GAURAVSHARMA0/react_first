import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      fathername: "",
      password: ""
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  SubmitHandler = e => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
    console.log(this.state);
    // const data = new FormData(e.target);
    // fetch('',{
    //     method:'GET',
    //     body:data,
    // })
  };

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.SubmitHandler}>
        <div>
          <p>Enter your name</p>
          <TextField
            id="outlined-input"
            label="Name"
            variant="outlined"
            onChange={this.onChangeHandler}
          />
          <p>Enter your age is</p>
          <TextField
            id="outlined-input"
            label="Age"
            variant="outlined"
            name="age"
            onChange={this.onChangeHandler}
          />
          <p>Enter your father's name</p>
          <TextField
            id="outlined-input"
            label="Father's name"
            variant="outlined"
            onChange={this.onChangeHandler}
          />
          <p>Enter Password</p>
          <TextField
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="outlined"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <Button variant="contained" color="primary">
            SUBMIT
          </Button>
        </div>
      </form>
    );
  }
}

export default SignUp;
