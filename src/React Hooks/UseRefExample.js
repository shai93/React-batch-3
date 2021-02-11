import React, {useEffect, useRef} from 'react';



const UseRefExample = ()=>{
    let inputRef = useRef();


    useEffect(()=>{
        inputRef.current.focus();
    })

    return (
        <input type="text" ref={inputRef}/>
    )

}


export default UseRefExample;




