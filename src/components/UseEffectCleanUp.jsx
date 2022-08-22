import React,{useState,useEffect} from 'react'

function UseEffectCleanUp() {
    const [width,setWidth] = useState(window.screen.width);
    const actualWidth=()=>{
        console.log(window.innerWidth);

    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);
    })
  return (
    <div>
        <p>size of window is</p>
        <h1>{width}</h1>
    </div>
  )
}

export default UseEffectCleanUp