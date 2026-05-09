import { useState } from 'react'
import './App.css'

function App() {
  	const [count, setCount] = useState(0)
	function increment(){
		setCount(count + 1) //Not so Good
	}
	function decrement(){
		setCount(count - 1) //Not so Good
	}
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>increment</button>
		<button onClick={decrement}>decrement</button>
    </div>
    
  )
}

export default App
