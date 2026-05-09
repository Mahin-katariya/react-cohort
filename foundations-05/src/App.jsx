import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState("idle")
  const [seconds, setSeconds] = useState(10)

  // useEffect works only in 2 conditions - 
  // When the component is mounted(loaded)
  // or When there is an update in the dependency array.

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(current => Math.max(seconds - 1, 0))

    },1000)

    return () => {
      // cleanup
      clearInterval(timerId); 
    }
  }, []) //here the after the callback inside useEffect, there is an empty array(i.e. the dependency array.)

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost(){
      try {
        setStatus("loading")
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5",
          {signal: controller.signal}
        )
        const data = await reponse.json()
        setPosts(data)
        setStatus("Success")


      } catch (error) {
        console.log(error);      
      }
    }

    return () => {
      controller.abort()
    }
  }, [])
}

export default App
