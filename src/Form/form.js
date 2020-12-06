import React from 'react';
import Button from 'react-bootstrap/Button';

class Form extends React.Component {
    
    constructor(props){
        super(props);
    }

    state = {
        name: "",
        desg: ""
    }

    updateState =(event)=>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    addEmployeeToParent = ()=>{
        this.props.addEmployee(this.state)
        this.setState({
            name: "",
            desg: ""
        })
    }

    render(){
        return(
            <form>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.updateState}></input>
                <label>Job</label>
                <input type="text" name="desg" value={this.state.desg} onChange={this.updateState}></input>
                <Button variant="primary" onClick={this.addEmployeeToParent}>Submit</Button>
            </form>
        )
    }

}



export default Form;