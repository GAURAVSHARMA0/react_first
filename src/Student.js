import React, { Component } from 'react';
import Person from './person/Person';
import  './person/Person.css';

class App extends Component {

  state = {
    person:[
      {name:"gaurav", age:"25"},
      {name:"Ashish", age:"26"},
      {name:"shivam", age:"25"}
      ]
  };
   switchNameHandler = (newname) =>{
    this.setState({
      person:[
        {name:newname, age:"25"},
        {name:"updateAshish", age:"26"},
        {name:"updateshivam", age:"25"}
        ]
    })
  }
  ChangedHandler = (event) =>{
    this.setState({
      person:[
        {name:event.target.value, age:"25"},
        {name:"updateAshish", age:"26"},
        {name:"updateshivam", age:"25"}
        ]
    })
  }
render(){
  return(
    <div>
      <div>
      <h1>Users Name</h1>
      <button className="button_left" onClick={this.switchNameHandler.bind(this, 'hy')}>click here</button>
      <button className="button_right" onClick={() => this.switchNameHandler('Gaurav')}>click here</button>
      </div>

      <Person 
          click = {this.switchNameHandler.bind(this, 'hi')}
          name={this.state.person[0].name} 
          age={this.state.person[0].age}
          iputbutton={this.ChangedHandler} 

      />
      <Person 
          name={this.state.person[1].name}  
          age={this.state.person[1].age} 
      />
    </div>
  )

}
  
}

export default App;













// import React, { useState } from 'react';
// import Person from './person/Person';
// const app = props => {

//   const [ personState, setPersonState ] = useState({
//     person:[
//       {name:"gaurav", age:"25"},
//       {name:"Ashish", age:"26"},
//       {name:"shivam", age:"25"}
//       ]
//   });
//   const switchNameHandler = () =>{
//     setPersonState({
//       person:[
//         {name:"upategaurav", age:"25"},
//         {name:"updateAshish", age:"26"},
//         {name:"updateshivam", age:"25"}
//         ]
//     })
//   }

//   return(
//     <div>
//       <h1>Users Name</h1>
//       <button onClick={this.switchNameHandler}>click here</button>
//       <Person name={personState.person[0].name} age={personState.person[0].age}  />
//       <Person name="shivam"  age="25" />
//     </div>
//   )
// }

// export default app;


// class Student extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             name: 'Cat in the Hat',
//             age: '',
//             father: 'Controlled',
//             mother: 'EUR',
//             };
          
//     }

//     handleChange =(e=12) =>{
//       this.setState({age :e})
//     }

//     render(){
//       return (
//         <React.Fragment>
//         <form>
//           <label>Name :</label>
//           <input type="text" name="name" value={this.state.name}></input>
//           <label>Father's Name :</label>
//           <input type="text" name="father" value={this.state.father}></input>
//           <label>Mother's Name :</label>
//           <input type="text" name="mother" value={this.state.mother}></input>
//           <label>Age :</label>
//           <input type="text" name="age" onchange={this.handleChange}  value={this.state.age}></input>
//         </form>
//         </React.Fragment>
//       )
//     }
// }
// export default Student;