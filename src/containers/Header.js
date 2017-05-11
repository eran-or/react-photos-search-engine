import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { stringify } from 'qs'

let Header = ({ history }) => {
  let input = '';
  return (
    <div className="main-header">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        //add the topic to history 
        history.push({
          pathname: '/Search',
          search: stringify({ q: input.value }),
          state: {
            topic: input.value
          }
        })
        input.value = ''
      }}>
        <input type="text"
          ref={node => { input = node }}
          placeholder="insert topic" />
        <button type="submit">
          Search photos
            </button>
      </form>
      <Link to="/History">History</Link>
    </div>
  )
}

export default withRouter(connect()(Header));