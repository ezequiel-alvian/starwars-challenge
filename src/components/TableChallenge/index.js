import React from 'react'
import PropTypes from 'prop-types'
import RowCaracterChallenge from './RowCaracterChallenge'

const TableChallenge = (props) => {
  const { data, title } = props

  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            {title.map(t =>
            <th scope="col" key={t.id}>{t.title}</th>
            )}
          </tr>
      </thead>
      <tbody>
        {data
          ? <RowCaracterChallenge
              data={data}
            />
          : null
      }
      </tbody>
      </table>
    </div>
  )
}

export default TableChallenge

TableChallenge.propTypes = {
  data: PropTypes.object,
  title: PropTypes.array,
  dispatch: PropTypes.func
}
