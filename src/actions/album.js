import * as request from 'superagent'
export const SET_ALBUMS = 'SET_ALBUMS'

export function addAlbum(id, title) {
    return {
      type: 'ADD_ALBUM',
      payload: {
        id,
        title
      }
    }
  }

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums
  }
}

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbums(response.body))
      })
  }
}