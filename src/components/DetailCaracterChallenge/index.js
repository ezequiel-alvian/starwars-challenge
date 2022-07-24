import React, { useContext } from 'react'
import { ChallengeContext } from '../ProviderChallenge'

const DetailCaracterChallenge = () => {
  const [state] = useContext(ChallengeContext)
  const { objectCaracter } = state

  return (
    <div>
      {
        objectCaracter && objectCaracter.map((o, i) =>
        <div className="card text-white bg-success mb-3" key={i}>
          <div className="card-header">{o.name}</div>
            <div className="card-body">
              <h5 className="card-title">{o.gender}</h5>
              <p className="card-text">{o.mass}</p>
              <p className="card-text">{o.created}</p>
              <p className="card-text">{o.edited}</p>
            </div>
        </div>
        )}
    </div>
  )
}

export default DetailCaracterChallenge
