import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import clientAxios from '../../config/axios'

export const ChallengeContext = createContext()

const initialState = {
  objectCaracter: null,
  listCaracter: null
}

const caracterReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        objectCaracter: state?.listCaracter?.results.filter(c => c.name === action.payload)
      }
    case 'DELETE':
      return {
        ...state,
        objectCaracter: null
      }
    case 'LIST':
      return {
        ...state,
        listCaracter: action.payload
      }
    default:
      return state
  }
}

const ProviderChallenge = props => {
  const [state, dispatch] = useReducer(caracterReducer, initialState)

  useEffect(() => {
    async function fetchMyAPI () {
      try {
        const response = await clientAxios()
        dispatch({ type: 'LIST', payload: response.data })
      } catch (err) {
        console.error(err)
      }
    }
    fetchMyAPI()
  }, [])
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
