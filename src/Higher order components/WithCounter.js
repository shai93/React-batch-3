import React from 'react';


const WithCounter = (OriginalComponent,componentCount)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
    
            this.state = {
                count:0
            }
        }
    
        handleCount = ()=>{
            this.setState({
                count:this.state.count+componentCount
            })
        }

        render(){
            return (
                <OriginalComponent count={this.state.count} handleCountfunction={this.handleCount} {...this.props}></OriginalComponent>
            )
        }
    }
    return NewComponent
}


export default WithCounter;