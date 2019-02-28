import { Input, Icon } from '../src'
import * as Mock from 'mockjs'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '@/style/component/Input.scss'
import styledIcon from '@/style/component/Icon.scss'
import * as sinon from 'sinon'
import { Simulate } from 'react-dom/test-utils'

chai.should()



describe('Input', () => {
  let container: HTMLDivElement
  const inputClass = `.${styled.input}`

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Input.should.exist
  })

  describe('设置size', () => {
    Input.Size.forEach(size => {
      it(`可以设置${size}`, () => {
        ReactDOM.render(<Input size={size} />, container)
        container.querySelector(inputClass).classList.contains(styled[size]).should.be.ok
      })
    })
  })

  it(`可以设置disabled`, () => {
    ReactDOM.render(<Input disabled />, container)
    container.querySelector(inputClass).hasAttribute('disabled').should.be.ok
  })

  it('可以设置defaultValue', () => {
    const value = Mock.Random.sentence(1, 2)
    ReactDOM.render(<Input defaultValue={value} />, container)
    const input: HTMLInputElement = container.querySelector(inputClass)
    input.defaultValue.should.equal(value)
  })

  it('可以设置value', () => {
    const value = Mock.Random.sentence(1, 2)
    ReactDOM.render(<Input value={value} />, container)
    const input: HTMLInputElement = container.querySelector(inputClass)
    input.value.should.equal(value)
  })

  it('可以设置placeholder', () => {
    const value = Mock.Random.sentence(1, 2)
    ReactDOM.render(<Input placeholder={value} />, container)
    const input: HTMLInputElement = container.querySelector(inputClass)
    input.placeholder.should.equal(value)
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 5)
    ReactDOM.render(<Input className={className} />, container)
    container.querySelector(inputClass).classList.contains(className).should.be.ok
  })

  it('可以设置readOnly', () => {
    ReactDOM.render(<Input readOnly />, container)
    container.querySelector(inputClass).hasAttribute('readonly').should.be.ok
  })

  it('可以设置prefix', () => {
    ReactDOM.render(<Input prefix={<Icon type='user' />} />, container)
    container.querySelector(inputClass).querySelector(`.${styled.prefix}`)
      .querySelector(`.${styledIcon.icon}`).should.exist
  })

  it('可以设置suffix', () => {
    ReactDOM.render(<Input suffix={<Icon type='user' />} />, container)
    container.querySelector(inputClass).querySelector(`.${styled.suffix}`)
      .querySelector(`.${styledIcon.icon}`).should.exist
  })

  it('可以触发focus', () => {
    const onFocus = sinon.fake()
    ReactDOM.render(<Input onFocus={onFocus} />, container)
    Simulate.focus(container.querySelector(inputClass))
    onFocus.should.has.been.called
  })

  it('可以触发blur', () => {
    const onBlur = sinon.fake()
    ReactDOM.render(<Input onBlur={onBlur} />, container)
    Simulate.blur(container.querySelector(inputClass))
    onBlur.should.has.been.called
  })

  it('可以触发change', () => {
    const onChange = sinon.fake()
    ReactDOM.render(<Input onChange={onChange} />, container)
    Simulate.change(container.querySelector(inputClass))
    onChange.should.has.been.called
  })

  it('可以触发pressEnter', () => {
    const onPressEnter = sinon.fake()
    ReactDOM.render(<Input onPressEnter={onPressEnter} />, container)
    Simulate.keyPress(container.querySelector(inputClass), { key: 'Enter' })
    onPressEnter.should.has.been.called
  })

  it('可以触发keyPress', () => {
    const onKeyPress = sinon.fake()
    ReactDOM.render(<Input onKeyPress={onKeyPress} />, container)
    Simulate.keyPress(container.querySelector(inputClass), { key: Mock.Random.character() })
    onKeyPress.should.has.been.called
  })

})