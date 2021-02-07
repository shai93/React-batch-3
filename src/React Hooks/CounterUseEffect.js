import React, {useState, useEffect} from 'react';


const CounterUseEffect = ()=>{
    const[count, setCount] = useState(0);
    let data = {};
    useEffect(async ()=>{
        const jsondata = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        data = await jsondata.json();
        console.log('in useeffect')
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

export default CounterUseEffect;