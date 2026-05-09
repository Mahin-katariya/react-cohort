import {useState} from "react"
import Navbar from "./components/header/Navbar.jsx"
import BooksGrid from "./components/content/BooksGrid/BooksGrid.jsx"
import './App.css'

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <BooksGrid />
    </div>    
  )
}

export default App
