import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ManualForm from './ManualForm.jsx'
import ReactHookForm from './ReactHookForm.jsx'

function App() {
  const [tab, setTab] = useState("manual");

  return (
    <>
      <div>
        <div className='shell'>
          <h1>Job application</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sunt eligendi quas consectetur modi tempora cumque quasi quod veritatis consequatur.</p>
        </div>
      <div className="tab">
        <button onClick={() => setTab('manual')}>Manual</button>
        <button onClick={() => setTab('rhf')}>React Hook Form</button>
      </div>
      <h1>Getting started with react</h1>
      {tab === "manual" ? <ManualForm/> : <ReactHookForm/>}
      </div>
    </>
  )
}

export default App
