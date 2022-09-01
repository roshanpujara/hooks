import React,{useReducer} from 'react'

function UseReducer() {
    const initialState = 0;
    const reducer = (currentState,action) => {
        switch(action.type){
            case 'increment':
                return currentState+1          
            case 'decrement':
                return (currentState-1)
            case 'reset':
                return (initialState)
        }
    }
    const [currentState,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
    
    <h1>{currentState>0?currentState:0}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>

  )
}

export default UseReducer