import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../index.css'

class Button extends Component {
  handleClick = () => console.log('clicked')

  render() {
    return <button>{this.props.children}</button>
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button
