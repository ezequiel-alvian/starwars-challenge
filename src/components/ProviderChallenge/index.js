import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const ChallengeContext = createContext()

const initialState = {
  objectCaracter: null
}

const caracterReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        objectCaracter: action.payload
      }
    case 'DELETE':
      return {
        ...state,
        objectCaracter: null
      }
    default:
      return state
  }
}

const ProviderChallenge = props => {
  const [state, dispatch] = useReducer(caracterReducer, initialState)
  return (
    <ChallengeContext.Provider value={[state, dispatch]}>
      {props.children}
    </ChallengeContext.Provider>
  )
}

export default ProviderChallenge

ProviderChallenge.propTypes = {
  children: PropTypes.object
}
