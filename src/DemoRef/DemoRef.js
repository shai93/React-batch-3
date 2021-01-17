import React from 'react';


class DemoRef extends React.Component{


    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }


    componentDidMount(){
        this.inputRef.current.style.backgroundColor = "green";
    }

    render(){

    return(
            <input type="text" ref={this.inputRef}/>
        )
    }
}


export default DemoRef;