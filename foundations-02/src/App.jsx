import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const events = [
  {
    id: 1,
    title: "Tech Conference",
    time: "10:00 AM",
    hall: "Hall A"
  },
  {
    id: 2,
    title: "AI Workshop",
    time: "1:30 PM",
    hall: "Hall B"
  },
  {
    id: 3,
    title: "Web Development Seminar",
    time: "4:00 PM",
    hall: "Hall C"
  }
];



function App() {
  return (

    <div>
    {events.forEach((event) => console.log(event.time))}
      <h1>Events -</h1>
      {events.map((event) => (
        <h2>{event.title}</h2>
      ))}
    </div>

  )

}

export default App
