import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './data/store'
import Header from './components/Header'
import theme from './data/theme'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <ThemeProvider theme={theme} >
          <Header>Project name here</Header>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
