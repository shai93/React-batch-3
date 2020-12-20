import React from 'react';
import WithCounter from './WithCounter';


class MouseHover extends React.Component{
    render(){
        return (
        <p onMouseOver={this.props.handleCountfunction}>Click {this.props.count} times</p>
        )
    }
}


export default WithCounter(MouseHover,10);