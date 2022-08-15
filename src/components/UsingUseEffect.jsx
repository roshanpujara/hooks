import React,{useState,useEffect} from 'react'

function UsingUseEffect() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState('');
    useEffect(()=> {
        console.log("interface renders");
        document.title=`${count} times clicked`;
    },[count])
  return (
    <div>
    <input type="text" value={text} onChange={e=>setText(e.target.value)} />
    <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default UsingUseEffect