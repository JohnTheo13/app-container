import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './data/store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          Project here
      </Provider>
    );
  }
}

export default App;
