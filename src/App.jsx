import React,{ useState } from 'react'
import UseStateObject from './components/UseStateObject'
import UseStateArray from './components/UseStateArray'
import UsingUseEffect from './components/UsingUseEffect'
import DataFetch from './components/DataFetch'
import PropsExample from './components/PropsExample'
import StyleSheets from './components/StyleSheets'
function App() {
  
  return (
    <div>    

      {/* <UseStateObject/>
      <UseStateArray/>
      <UsingUseEffect/>
      <DataFetch/>
      <PropsExample name='roshan'/>
      <PropsExample name='rama'/>
      <PropsExample name='shyama'/> */}
      <StyleSheets primary={true}/>
    </div>

  )
}

export default App
