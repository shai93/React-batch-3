import React, { Fragment } from 'react';



const CondIndex = ()=>{
    const arr = [1,2,3,4];
        // if(arr.length>0){
        //     return(
        //         arr.map(ele=>{
        //             return (<p key={ele}>{arr.length}</p>)
        //         })
        //     )
        // }
        // return 0;
        
        return (
            <>
                {
                    arr.length>0 && arr.map(ele=>{
                        return (<p key={ele}>{arr.length}</p>)
                    })
                }
            </>
        )
    
}


export default CondIndex;