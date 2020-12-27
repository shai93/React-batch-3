import React from 'react';
import {UserConsumer} from './UserContext';


class E extends React.Component{
    render(){
        return(
            <UserConsumer>
                {
                    (username)=>{
                        return (
                        <h1>hello {username}</h1>
                        )
                    }
                }

            </UserConsumer>


            // <p>E component</p>
        )
    }
}


export default E;