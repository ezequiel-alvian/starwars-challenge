import React from 'react'
import PropTypes from 'prop-types'

const RowCaracterChallenge = (props) => {
  console.log(props)
  const { data: { results } } = props
  return (
    <>
    {results && results.map((caracter, index) =>
    <tr key={index}>
      <th scope="row">{index + 1 }</th>
      <td>{ caracter.name }</td>
      <td>{ caracter.birth_year }</td>
      <td>{caracter.height}</td>
      <td>
        <button type="button" className="btn btn-outline-success">View</button>
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
  }).isRequired
}
