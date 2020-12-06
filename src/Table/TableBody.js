import React from 'react';


const TableBody = (props) => {
const data = props.tableBody;
const removeData =  props.removeData;

const rows = data.map((element, index)=>{
    return(
        <tr key={index}>
            <td>{element.name}</td>
            <td>{element.desg}</td>
            <td><button onClick={()=>removeData(index)}>Delete</button></td>
        </tr>
    )
})

    return (
        <tbody>
            {rows}
        </tbody>
    )

}


export default TableBody;