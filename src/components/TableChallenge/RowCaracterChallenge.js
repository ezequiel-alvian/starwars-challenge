import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { ChallengeContext } from '../ProviderChallenge'

const RowCaracterChallenge = (props) => {
  const [, dispatch] = useContext(ChallengeContext)
  const { data: { results } } = props
  const navigate = useNavigate()

  const onClick = (e, name, index) => {
    e.preventDefault()
    const caracter = results?.filter(c => c.name === name)
    dispatch({ type: 'CREATE', payload: caracter })
    navigate(`/detail/${index}`)
  }

  return (
    <>
    { results && results.map((caracter, index) =>
    <tr key={index}>
      <th scope="row">{index + 1 }</th>
      <td>{ caracter.name }</td>
      <td>{ caracter.birth_year }</td>
      <td>{ caracter.height }</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={(e) => onClick(e, caracter.name, index + 1)}
        >
          View
        </button>
      </td>
    </tr>
    )}
    </>
  )
}
export default RowCaracterChallenge

const results = PropTypes.shape({
  name: PropTypes.string,
  birthYear: PropTypes.string
})
RowCaracterChallenge.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(results)
  }).isRequired,
  setCaracter: PropTypes.func,
  dispatch: PropTypes.func
}
