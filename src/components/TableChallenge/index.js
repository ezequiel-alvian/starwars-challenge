import React, { useState, useEffect } from 'react'
import clientAxios from '../../config/axios'
import RowCaracterChallenge from './RowCaracterChallenge'

const TableChallenge = () => {
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
    <div className="container">

    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NAME</th>
          <th scope="col">BIRTH YEAR</th>
          <th scope="col">HEIGHT</th>
          <th scope="col">DETAIL</th>
        </tr>
    </thead>
    <tbody>
      {data
        ? <RowCaracterChallenge data={data}/>
        : null
    }
    </tbody>
    </table>
    </div>
  )
}

export default TableChallenge
