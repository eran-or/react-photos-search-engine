import React from 'react';
import Photo from './Photo'
import Loader from './Loader'

const Photos = ({ flickrPhotos, pixabayPhotos }) => {
  let fphotos = [], Pphotos = []
  let mapPhotos = (arr) => {
    return arr.map(photo => {
      let url;
      if (photo.previewURL) {
        url = photo.previewURL;
      } else {
        url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`;
      }
      return (
        <Photo url={url} key={photo.id} />
      )
    })
  }

  if (flickrPhotos && flickrPhotos.length > 0) {
    fphotos = mapPhotos(flickrPhotos);
  }
  if (pixabayPhotos && pixabayPhotos.length > 0) {
    Pphotos = mapPhotos(pixabayPhotos);
  }
  return (
    <div>
      <h2 className="row">Flickr's photos</h2>
      <div className="row">{fphotos.length > 0 ? fphotos : <Loader />}</div>
      <h2 className="row">Pixabay's photos</h2>
      <div className="row">{Pphotos.length > 0 ? Pphotos : <Loader />}</div>
    </div>
  )
}

export default Photos;