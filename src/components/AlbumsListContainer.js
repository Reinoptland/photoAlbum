import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/album'

const sleep = time => new Promise(
    resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
          response.body.forEach(album => this.props.addAlbum(album))
      })

    this.props.addAlbum(1, 'My holiday in Blegium')
    this.props.addAlbum(2, 'My holiday in Grrrmany')
  }

  render() {
      console.log(this.state.albums)
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)
