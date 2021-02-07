import React, {useState} from 'react';

const HookCounter = ()=>{
    const [count,setCount] = useState(10);
    return (
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    )

}


export default HookCounter;



// state initial
// handler state
// use hook at top level only