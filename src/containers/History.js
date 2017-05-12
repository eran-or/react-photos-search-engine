import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { stringify } from 'qs'
import { search } from '../actions'

let History = ({ searchHistory, onClickHandle }) => {
  let tableRows = []
  for (let i = searchHistory.length - 1; i >= 0; i--) {
    const { timeOfSearch, topic } = searchHistory[i]
    let tr =
      //Display the topics and time of search when clicking the row you will back to search //resulte, and update the search time in the history page.
      <tr key={timeOfSearch}
        onClick={() => (onClickHandle(topic))}>
        <td><span  className="search-of-time">{timeOfSearch}</span></td>
        <td><Link to={`/Search?q=${topic}`}>{topic}</Link></td>
      </tr>
    tableRows.push(tr);
  }

  return (
    <div>
      <div className="main-header clearfix">
        <header className="main-caption col-xs-12">
          <span className="btn pull-right disable-events">History</span>
          <Link className="btn btn-link pull-left" to="/">Start to Search</Link>
        </header>
        
      </div>
      <div className="table-responsive container-fluid">
        <table className="table text-left">
          <tbody>
            <tr>
              <th className="col-xs-3"><span className="searched-at">Searched At</span></th><th className="col-xs-13"><span className="topic">Topic</span></th>
            </tr>
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  )
}

History.propTypes = {
  searchHistory: PropTypes.array.isRequired,
  onClickHandle: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickHandle: (topic) => {
      dispatch(search(topic))
      ownProps.history.replace({
        pathname: '/Search',
        search: stringify({ q: topic }),
        state: {
          topic: topic
        }
      });
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    searchHistory: state.searchHistory
  }
}
History = connect(mapStateToProps, mapDispatchToProps)(History)
export default withRouter(connect()(History));