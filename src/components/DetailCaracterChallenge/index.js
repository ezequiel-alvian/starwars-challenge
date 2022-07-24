import React, { useContext } from 'react'
import { ChallengeContext } from '../ProviderChallenge'
import { useNavigate } from 'react-router-dom'

const DetailCaracterChallenge = () => {
  const [state] = useContext(ChallengeContext)
  const { objectCaracter } = state
  const navigate = useNavigate()
  const onClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div>
      {
        objectCaracter
          ? objectCaracter.map((o, i) =>
          <div
            className="card text-white bg-success mb-3"
            key={i}
          >
            <h4 className="card-header p-3">
              Name: {o.name}
            </h4>
            <div className="card-body">
              <h5 className="card-title">
                Gender: {o.gender}
              </h5>
              <p className="card-text">
                Mass: {o.mass}
              </p>
              <p className="card-text">
                Created: {o.created}
              </p>
              <p className="card-text">
                Edited: {o.edited}
              </p>
            </div>
          </div>)
          : <div className="alert alert-success" role="alert">
            No se pudo encontrar el estado vuelva al inicio.
        </div>
      }
      <button
        type="button"
        className="btn btn-outline-success mt-4"
        onClick={(e) => onClick(e)}>
        Volver
      </button>
    </div>
  )
}

export default DetailCaracterChallenge
