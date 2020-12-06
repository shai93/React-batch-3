import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Form from '../Form/form';
class Table extends React.Component {

    state = {
        headers: ["Name", "Job", "Action"],
        body: [{
            name: "Priyanka",
            desg: "Software Developer"
        },
        {
            name: "Amogh",
            desg: "Software Developer 3"
        },
        {
            name: "Divyesh",
            desg: "Software Developer 2"
        },
        {
            name: "Anuja",
            desg: "CTO"
        },
        {
            name: "Mansi",
            desg: "CEO"
        }]
    }  
    

    addData=(newEmployee)=>{
        this.setState({
            body:[...this.state.body, newEmployee]
        })
    }
    

    removeData=(removeIndex)=>{
        const newbody = this.state.body.filter((ele, index)=>{
            if(index != removeIndex){
                return ele
            }
        })

        this.setState({
            body:newbody
        })
    }


    render() {
        return (
            <div>
                <table>
                <TableHeader tableHeaders={this.state.headers}></TableHeader>
                <TableBody tableBody={this.state.body} removeData={this.removeData}></TableBody>
                </table>
                <Form addEmployee={this.addData}></Form>
            </div>
        )
    }

}

// JSX => html


// state data
// state can be change

// memory store
// props and state
// property
// uni-directional
// Read only
// Parent to child
// render()

// to html element
// React.createElement('div', 'This is Table component')
// JSX (Javascript+XML)



export default Table;