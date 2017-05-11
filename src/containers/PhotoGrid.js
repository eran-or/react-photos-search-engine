import React, { Component } from 'react'
import { connect } from 'react-redux'
import Photos from '../components/Photos'
import Header from '../containers/Header'
import { search } from '../actions'

class PhotoGrid extends Component {

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Photos {...this.props} />
      </div>
    )
  }

  //When component initialize, search for images from query string
  componentWillMount() {
    this.props.dispatch(search(this.props.history.location.state.topic))
  }
  //When component update, search for images from query string
  componentWillUpdate() {
    if (this.props.history.location.state.topic !== this.props.location.state.topic) {
      this.props.dispatch(search(this.props.history.location.state.topic))
    }
  }
}

//Update the state with images depending if it's the first time we search that topic.
const mapStateToProps = (state, ownProps) => {

  let index = state.topics.indexOf(ownProps.location.state.topic),
    flickrPhotos = [],
    pixabayPhotos = [];
  if (index > -1) {
    flickrPhotos = state.searchHistory[index].flickrPhotos.photos
    pixabayPhotos = state.searchHistory[index].pixabayPhotos.photos
  } else {
    flickrPhotos = state.flickrPhotos.photos;
    pixabayPhotos = state.pixabayPhotos.photos;
  }

  return (
    {
      flickrPhotos: flickrPhotos,
      pixabayPhotos: pixabayPhotos,
      topics: state.topics,
    }
  );
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    dispatch,
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);