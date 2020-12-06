import React from 'react';
import "./TableHeader.css";

const TableHeader = (props) => {
    const data = props.tableHeaders    
    const h = data.map((element, index)=>{
        return (
            <th key={index} style={
                {
                    color:"green"
                }
            }   className="tableHeader">
                {element}
            </th>
        )
    })

    return (
        <thead>
            <tr>
                {h}
            </tr>
        </thead>
    )

}


export default TableHeader;