import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(0);

  const addvalue = ()=>{
    if(counter<20){
      setCounter(counter + 1);
    }else{
      alert("value cannot be added")
    }
    
  }

  const removevalue = ()=>{
    if(counter>0){
      setCounter(counter - 1);
    }else{
      alert("value cannot be removed")
    }
    
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <button onClick={addvalue}>Add counter {counter}</button>
      <button onClick={removevalue}>Remove counter {counter}</button>
    </>
  )
}

export default App
