import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);
    if(counter <= 19){ // add till 20 only
      setCounter(counter + 1)
    } else {
      false;
    }
  }

  const removeValue = () => {
    // counter = counter - 1
    // setCounter(counter)
    if(counter > 0){  // remove till 0
      setCounter(counter - 1)
    } else {
      false;
    }
  }
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button> 
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
