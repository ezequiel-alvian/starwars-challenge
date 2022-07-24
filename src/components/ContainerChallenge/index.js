import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailCaracterChallenge from '../DetailCaracterChallenge'
import TableChallenge from '../TableChallenge'
import ProviderChallenge from '../ProviderChallenge'
import title from './helper'
import '../../App.css'

function ContainerChallenge () {
  return (
  <ProviderChallenge>
    <Router>
      <div className="App">
        {
             <Routes>
                <Route
                  exact path="/"
                  element={
                    <TableChallenge
                      title={title}
                  />}
                />
                <Route
                  exact path={'/detail/:id'}
                  element={<DetailCaracterChallenge/>}
                />
              </Routes>
        }
      </div>
    </Router>
  </ProviderChallenge>
  )
}

export default ContainerChallenge
