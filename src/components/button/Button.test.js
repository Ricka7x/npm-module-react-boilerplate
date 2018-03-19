import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  const mockClick = jest.fn()
  const props = { onClick: mockClick, children: 'world' }
  const button = shallow(<Button {...props} />)

  it('matches snapshot', () => {
    expect(button).toMatchSnapshot()
  })

  it('renders correctly', () => {
    expect(button.find('button').length).toBe(1)
  })
  it('renders correct text provided as children', () => {
    expect(button.text()).toBe('world')
  })

  it('calls function on click', () => {
    button.find('button').simulate('click')
    expect(mockClick).toBeCalled()
  })

  it("doesn't call function when no function is passed", () => {
    const newbutton = shallow(<Button>hi</Button>)
    newbutton.find('button').simulate('click')
    expect(mockClick).toBeCalled()
  })
})
