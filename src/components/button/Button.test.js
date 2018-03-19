import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  const button = shallow(<Button>world</Button>)
  it('renders correct text provided as children', () => {
    expect(button.props().children).toBe('world')
  })
})
