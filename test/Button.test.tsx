import { Button } from '../dist'
import * as chai from 'chai'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Simulate } from 'react-dom/test-utils'

chai.should()
chai.use(sinonChai)

let container: Element
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})
afterEach(() => {
  container.remove()
  container = null
})

describe('Button', () => {
  it('可以导入', () => {
    Button.should.exist
  })
  describe('icon', () => {
    it('可以设置icon', () => {
      ReactDOM.render(<Button icon="left"></Button>, container)
      container.querySelector('.s-button .s-icon').should.is.not.empty
    })
    it('可以设置iconRight', () => {
      ReactDOM.render(<Button iconRight='right'></Button>, container)
      container.querySelector('.s-button .s-icon').should.is.not.empty
    })
  })
  describe('shape', () => {
    it('可以设置shape=circle', () => {
      ReactDOM.render(<Button shape="circle"></Button>, container)
      container.querySelector('.s-button.s-circle').should.is.not.empty
    })
    it('可以设置shape=round', () => {
      ReactDOM.render(<Button shape="round"></Button>, container)
      container.querySelector('.s-button.s-round').should.is.not.empty
    })
  })
  describe('type', () => {
    it('可以设置primary', () => {
      ReactDOM.render(<Button type="primary"></Button>, container)
      container.querySelector('.s-button.s-primary').should.is.not.empty
    })
    it('可以设置dashed', () => {
      ReactDOM.render(<Button type="dashed"></Button>, container)
      container.querySelector('.s-button.s-dashed').should.is.not.empty
    })
    it('可以设置danger', () => {
      ReactDOM.render(<Button type="danger"></Button>, container)
      container.querySelector('.s-button.s-danger').should.is.not.empty
    })
  })
  describe('size', () => {
    it('可以设置small', () => {
      ReactDOM.render(<Button size="small"></Button>, container)
      container.querySelector('.s-button.s-small').should.is.not.empty
    })
    it('可以设置large', () => {
      ReactDOM.render(<Button size="large"></Button>, container)
      container.querySelector('.s-button.s-large').should.is.not.empty
    })
  })
  it('可以触发click事件', () => {
    let clickHandle = sinon.fake()
    ReactDOM.render(<Button onClick={clickHandle}></Button>, container)
    Simulate.click(container.querySelector('.s-button'))
    clickHandle.should.has.been.called
  })
  it('可以disabled', () => {
    let clickHandle = sinon.fake()
    ReactDOM.render(<Button onClick={clickHandle} disabled></Button>, container)
    clickHandle.should.has.not.been.called
  })
  it('可以设置htmlType', () => {
    const type = 'submit'
    ReactDOM.render(<Button htmlType={type}></Button>, container)
    container.querySelector('.s-button').getAttribute('type').should.equal(type)
  })
})