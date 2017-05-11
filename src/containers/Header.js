import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { stringify } from 'qs'

let Header = ({ history }) => {
  let input = '';
  return (
    <div className="main-header clearfix">
      <form className="form-inline" onSubmit={e => {
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
        <div className="form-group">
          <input className="form-control add-sides-margin" type="text"
            ref={node => { input = node }}
            placeholder="insert topic" />
        </div>
        <button className="btn btn-primary xs-pull-right" type="submit">
          Search photos
            </button>

        <Link className="btn btn-link pull-left" to="/History">History</Link>
      </form>
    </div>
  )
}

export default withRouter(connect()(Header));