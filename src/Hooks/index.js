import React from 'react';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            users:[]
        };
        console.log('constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            this.setState({
                users:json
            })
        })
    }

    render(){
        console.log('render')
        return(
            this.state.users.map(ele=>{
                return(
                    <div key={ele.id}>
                        <div>{ele.id}</div>
                        <div>{ele.name}</div>
                        <div>{ele.username}</div>
                    </div>
                )
            })
        )
    }

    componentDidUpdate(){
        // setState
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    
}


export default Index;