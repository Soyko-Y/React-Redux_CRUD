import React              from 'react'
import RowHeadings        from './row-headings'
import Row                from './row'
import { connect }        from 'react-redux'
import * as filterActions from '../actions/filter-actions'
import * as tableActions  from '../actions/table-actions'

let Table = ({ rows, filter, setFilter, deleteRow, editRow }) => (
  <div>
    <div>
      <label>Search:
        <input
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        />
      </label>
    </div>
    <RowHeadings />
      {
        rows ?
          rows.map((row) => (
            <Row {
              ...{
                ...row,
                deleteRow,
                editRow,
                key: row.id,
              }
            }/>)
          ) :
          'loading'
      }
  </div>
)

const mapStateToProps = ({ rows, filter }) => {
  const byName = (prev, next) =>
    (prev.name > next.name ?
      1 :
      prev.name < next.name ? -1 : 0) * 1

  return {
    filter,
    rows: !rows ?
      []:
      Object.values(rows)
        .sort(byName)
        .filter(row => row.name
          .toLowerCase()
          .search(filter) !== -1),
  }
}

export default connect(
  mapStateToProps,
  {
    ...filterActions,
    ...tableActions,
  },
) (Table)