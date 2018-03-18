import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  handleClick = () => console.log('clicked')

  render() {
    return <button onClick={this.handleClick}>hello react</button>
  }
}

render(<App />, document.querySelector('#app'))
