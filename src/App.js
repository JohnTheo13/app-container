import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './data/store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <div>Project here</div>
      </Provider>
    );
  }
}

export default App;
