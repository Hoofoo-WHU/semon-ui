import { Button } from '@/'
import { expect } from 'chai'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const app = document.createElement('div')

describe('Button', () => {
  it('存在', () => {
    expect(Button).is.exist
  })
  it('可以设置icon', () => {
    ReactDOM.render(<Button icon="left"></Button>, app)
    expect(app.querySelector('.s-button .s-icon')).is.not.empty
    ReactDOM.unmountComponentAtNode(app)
  })
  it('可以设置shape=circle', () => {
    ReactDOM.render(<Button shape="circle"></Button>, app)
    expect(app.querySelector('.s-button.s-circle')).is.not.empty
    ReactDOM.unmountComponentAtNode(app)
  })
})