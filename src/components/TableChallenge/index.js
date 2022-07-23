import React, { useState, useEffect } from 'react'
import clientAxios from '../../config/axios'

const TableChallenge = () => {
  const [dada, dataSet] = useState()
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
  console.log(dada)
  return (
    <div>
      Table
    </div>
  )
}

export default TableChallenge
