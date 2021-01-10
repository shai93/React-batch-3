import React from 'react';
import Home from './Home';
import {Link, Route, NavLink, Redirect} from 'react-router-dom';
import Main from './Main';


class Index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login:false
        }
    }

    handleLogin = ()=>{
        this.setState({
            login:true
        })
    }

    handleLogout = ()=>{
        this.setState({
            login:false
        })
    }


    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/home" activeStyle={{ color: "green" }} exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{ color: "green" }} exact>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" activeStyle={{ color: "green" }} exact>Main</NavLink>
                    </li>
                </ul>


                {/* <Route path="/home">
                    <Home></Home>
                </Route> */}

                <Route path="/about" exact render={
                    () => {
                        return (
                            <h2>ABout Page</h2>
                        )
                    }
                } />

                <Route path="/home"  exact render={()=>{
                    console.log(this.state.login)
                    return(
                        this.state.login?<Home/>:<Redirect to="/"/>
                        )
                }}></Route>

                <Route path="/" component={Main} exact></Route>
                <button onClick={this.handleLogout}>Logout</button> &nbsp;&nbsp;&nbsp;
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Index;