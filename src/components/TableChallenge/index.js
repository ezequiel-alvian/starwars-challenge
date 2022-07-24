import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import RowCaracterChallenge from './RowCaracterChallenge'
import { ChallengeContext } from '../ProviderChallenge'

const TableChallenge = (props) => {
  const { title } = props
  const [state] = useContext(ChallengeContext)

  return (

    <div className="container">
      {state.listCaracter
        ? <table className="table table-dark">
        <thead>
          <tr>
            {title.map(t =>
            <th scope="col" key={t.id}>{t.title}</th>
            )}
          </tr>
      </thead>
      <tbody>
          <RowCaracterChallenge
          listCaracter={state.listCaracter}
            />
      </tbody>
      </table>
        : <div className="spinner-grow text-success" role="status">
  <span className="sr-only">Loading...</span>
</div>
}
    </div>
  )
}

export default TableChallenge

TableChallenge.propTypes = {
  listCaracter: PropTypes.object,
  title: PropTypes.array,
  dispatch: PropTypes.func
}
