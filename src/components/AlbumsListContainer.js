import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums, getAlbums } from '../actions/album'

const sleep = time => new Promise(
    resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getAlbums()
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

export default connect(mapStateToProps, { addAlbum, setAlbums, getAlbums })(AlbumsListContainer)
