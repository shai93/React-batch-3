import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';


const CounterUseEffect = ()=>{
    const[count, setCount] = useState(0);
    const[data, setData] = useState({});
    useEffect(async ()=>{
        const jsondata = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        setData(await jsondata.json())
    });

    return(
        <div>
            {console.log('in return ')}
            {JSON.stringify(data)}
            <p>Counter Value: - {count}</p>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        </div>
    )
}


//{}
// api call
// {json}
// setData i.e, setState({
//     data:{json}
// })

export default CounterUseEffect;