import React from 'react'
import { render } from 'react-dom'
import { Button } from 'npm-module-react'
import logo from './yabit-icon.svg'

class App extends React.Component {
  handleClick = () => console.log('clicked')

  render() {
    return (
      <div>
        <img src={logo} alt="" />
        <Button onClick={this.handleClick}>hello react</Button>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
