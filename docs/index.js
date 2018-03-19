import React from 'react'
import { render } from 'react-dom'
import { Button } from 'npm-module-react'

class App extends React.Component {
  handleClick = () => console.log('clicked')

  render() {
    return <Button onClick={this.handleClick}>hello react</Button>
  }
}

render(<App />, document.querySelector('#app'))
