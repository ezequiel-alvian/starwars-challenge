import './App.css'
import React from 'react'
import DetailCaracterChallenge from './components/DetailCaracterChallenge'
import TableChallenge from './components/TableChallenge'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={<TableChallenge/>}/>
          <Route exact path="/detail" element={<DetailCaracterChallenge/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
