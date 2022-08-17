import React,{ useState } from 'react'
import UseStateObject from './components/UseStateObject'
import UseStateArray from './components/UseStateArray'
import UsingUseEffect from './components/UsingUseEffect'
import DataFetch from './components/DataFetch'
import PropsExample from './components/PropsExample'

function App() {
  
  return (
    <div>    

      <UseStateObject/>
      <UseStateArray/>
      <UsingUseEffect/>
      <DataFetch/>
      <PropsExample name='roshan'/>
      <PropsExample name='rama'/>
      <PropsExample name='shyama'/>
    </div>

  )
}

export default App
