import React, {useState} from 'react';

const MultipleCounter = ()=>{
    const initialValue = 0;
    const [count,setCount] = useState(initialValue);

    const incrementByFive = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1);
        }
    }

    return (
        <div>
            <div>
            Counter Value:-  {count}
            </div>
            <div>
                <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            </div>
            <div>
                <button onClick={()=>setCount(initialValue)}>Reset</button>
            </div>
            <div>
                <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            </div>
            <div>
                <button onClick={incrementByFive}>Increment by 5</button>
            </div>
        </div>
    )

}


export default MultipleCounter;
