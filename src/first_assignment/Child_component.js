// import React from 'react';

// class child_component extends React.Component{
    
//     render(props){
//         return(<div>
//             <p>Your Name is {this.props.name}</p>
//             <input type="text" name="name" onChange={this.props.changevalue} value={this.props.name}/>
//             <p>Your Age is {this.props.age}</p>
//             <input type="text" name="age" onChange={this.props.changevalue} value={this.props.age}/>
//             <p>Your father's name is {this.props.fathername}</p>
//             <input type="text" name="fathername" onChange={this.props.changevalue} value={this.props.fathername}/>

//             <p>This is {this.props.First_component} Component</p></div>)
//     }
// }

// export default child_component;


import React from 'react';

const child_component = (props) =>{
        return(<div>
            <p>Your Name is {props.name}</p>
            <input type="text" name="name" onChange={props.changevalue} value={props.name}/>
            <p>Your Age is {props.age}</p>
            <input type="text" name="age" onChange={props.changevalue} value={props.age}/>
            <p>Your father's name is {props.fathername}</p>
            <input type="text" name="fathername" onChange={props.changevalue} value={props.fathername}/>

            <p>This is {props.First_component} Component</p></div>
        )
    }


export default child_component;


