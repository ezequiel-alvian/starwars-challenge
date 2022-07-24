import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import clientAxios from '../../config/axios'
import DetailCaracterChallenge from '../DetailCaracterChallenge'
import TableChallenge from '../TableChallenge'
import ProviderChallenge from '../ProviderChallenge'
import title from './helper'
import '../../App.css'

function ContainerChallenge () {
  const [data, dataSet] = useState()

  useEffect(() => {
    async function fetchMyAPI () {
      try {
        const response = await clientAxios()
        dataSet(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchMyAPI()
  }, [])

  return (
  <ProviderChallenge>
    <Router>
      <div className="App">
        {
          data
            ? <Routes>
                <Route
                  exact path="/"
                  element={
                    <TableChallenge
                      data={data}
                      title={title}
                  />}
                />
                <Route
                  exact path={'/detail/:id'}
                  element={<DetailCaracterChallenge/>}
                />
              </Routes>
            : <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }
      </div>
    </Router>
  </ProviderChallenge>
  )
}

export default ContainerChallenge
