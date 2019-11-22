import React from 'react';
import FirstChild from './firstChild';

class ParentComponent extends React.Component{
    constructor(props){
        console.log('IN [parent] ===> constructor');
        super(props);
        this.state={
            Name:"xyz",
        };

    }
    componentDidMount(){
        console.log('IN [parent] ===> componentDidMount');
        setTimeout(() => {
            this.setState({Name: "Gaurav"},console.log('This will run after 1 second!'))
            
          }, 10000);
      
    }
    render(){
        console.log('IN [parent] ===> render ');
        return <FirstChild name={this.props.name} />;
    }
}

export default ParentComponent;