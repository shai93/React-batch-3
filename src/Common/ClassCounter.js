import React from 'react';


export default class ClassCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    handleCount = ()=>{                                   //Arrow function
        this.setState({                                 //setCount
            count:this.state.count+1
        })
    }

    render(){
        return(
        <button onClick={this.handleCount}>Clicked {this.state.count} times</button>
        )
    }
}