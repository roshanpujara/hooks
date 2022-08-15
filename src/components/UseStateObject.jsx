import React,{useState} from 'react'

function UseStateObject() {
    const [data,setData]=useState({fname:'',lname:''})
  return (
    <div>
    <form>
        <input type="text" value={data.fname} onChange={e=>setData({...data,fname:e.target.value})} />
        <input type="text" value={data.lname} onChange={e=>setData({...data,lname:e.target.value})} />
        <h1>first name is {data.fname} and last name is {data.lname}</h1>
    </form>
    </div>
  )
}

export default UseStateObject