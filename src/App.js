import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg';
import './App.css';
import AlbumListContainer from './components/AlbumsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <AlbumListContainer />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
