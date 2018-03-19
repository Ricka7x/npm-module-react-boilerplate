import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  const mockClick = jest.fn()
  const button = shallow(<Button onClick={mockClick}>world</Button>)

  it('renders correctly', () => {
    expect(button).toMatchSnapshot()
  })
  it('renders correct text provided as children', () => {
    expect(button.props().children).toBe('world')
  })
  it('calls function on click', () => {
    button.find('button').simulate('click')
    expect(mockClick).toBeCalled()
  })
})
