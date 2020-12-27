import React from 'react';
import E from './E';
import UserContext from './UserContext';

class C extends React.Component{
    // static contextType = UserContext

    render(){
        return(
            <div>
                <p>C component: - {this.context}</p>
                <E></E>
            </div>
        )
    }
}

C.contextType = UserContext;


export default C;


// 2 ways to consume data in context

// 1. using arrow function
// 2. using contexType