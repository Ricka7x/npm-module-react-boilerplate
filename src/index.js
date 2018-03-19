import React from 'react'
import { render } from 'react-dom'
import Button from './components/button/Button'
import './index.css'

class App extends React.Component {
  handleClick = () => console.log('clicked')

  render() {
    return <Button onClick={this.handleClick}>hello react</Button>
  }
}

render(<App />, document.querySelector('#app'))
