import React from 'react';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';


const Category = ()=>{

    const Item = ()=>{
        const {name} = useParams();

        return (
            <h1>
               {name}
            </h1>
        )
    }


    const {url} = useRouteMatch();
        return(
            <div>
                <ul>
                <li>
                    <Link to={`${url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${url}/shirts`}>Shirts</Link>
                </li>
                <li>
                    <Link to={`${url}/jeans`}>Jeans</Link>
                </li>
            </ul>

            <Route path={`${url}/:name`} component={Item}></Route>
            </div> 
        )
}


export default Category;