import React,{useState} from 'react';
function UseStateArray(){
    const [value,setValue]=useState([]);
    const addValue=()=>{
        setValue([...value,{
            id: value.length,
            data: Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <div>
        <button onClick={addValue}>add value</button>
        {value.map(e=>(<h1>{e.data}</h1>))}
            {/* <ul>
                {value.map(item=>(
                    <li key={item.id}>{item.data}</li>
                ))}
            </ul> */}
        </div>
    )
}
export default UseStateArray