import React from 'react';
import WithCounter from './WithCounter';

class Counter extends React.Component{

    render(){
        console.log(this.props)
        return (
        <button onClick={this.props.handleCountfunction}>Click {this.props.count} times</button>
        )
    }
}


export default WithCounter(Counter,5);