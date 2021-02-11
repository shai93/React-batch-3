import React, {useState, useEffect} from 'react';

const UseEffectExample = ()=>{
    const [count, setCount] = useState(0);
    const [userName, setName] = useState("");

    useEffect(()=>{
        document.title = `Clicked ${count} times`;
        console.log('This line should only execute for userName change')
    },[userName])

    return (
        <div>
            <input type="text" value={userName} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button onClick={()=>setCount(count+1)}>Change document title</button>
        </div>
    )
}


export default UseEffectExample;


// clicked 0 times


// componentdidmount = clciked 0 times
// componentdidupdate = clicked 1 times
// api call data