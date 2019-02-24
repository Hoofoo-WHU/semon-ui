import { Button } from '../src'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sinon from 'sinon'
import { Simulate } from 'react-dom/test-utils'
import styled from '@/style/component/Button.scss'
import * as Mock from 'mockjs';

chai.should()

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

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Button className={className} />, container)
    container.querySelector(`.${styled.button}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Button style={style} />, container)
    const button: HTMLElement = container.querySelector(`.${styled.button}`)
    button.style.color.should.equal(style.color)
  })

  it('可以触发click事件', () => {
    let clickHandle = sinon.fake()
    ReactDOM.render(<Button onClick={clickHandle}></Button>, container)
    Simulate.click(container.querySelector(`.${styled.button}`))
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
    container.querySelector(`.${styled.button}`).getAttribute('type').should.equal(type)
  })

  describe('icon', () => {
    it('可以设置icon', () => {
      ReactDOM.render(<Button icon='left'></Button>, container)
      container.querySelector(`.${styled.button} .${styled.icon}`).should.exist
    })
    it('可以设置iconRight', () => {
      ReactDOM.render(<Button iconRight='right'></Button>, container)
      container.querySelector(`.${styled.button} .${styled.icon}`).should.exist
    })
  })

  describe('shape', () => {
    it('可以设置shape=circle', () => {
      ReactDOM.render(<Button shape='circle'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.circle}`).should.exist
    })
    it('可以设置shape=round', () => {
      ReactDOM.render(<Button shape='round'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.round}`).should.exist
    })
  })

  describe('type', () => {
    it('可以设置primary', () => {
      ReactDOM.render(<Button type='primary'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.primary}`).should.exist
    })
    it('可以设置dashed', () => {
      ReactDOM.render(<Button type='dashed'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.dashed}`).should.exist
    })
    it('可以设置danger', () => {
      ReactDOM.render(<Button type='danger'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.danger}`).should.exist
    })
  })

  describe('size', () => {
    it('可以设置small', () => {
      ReactDOM.render(<Button size='small'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.small}`).should.exist
    })
    it('可以设置large', () => {
      ReactDOM.render(<Button size='large'></Button>, container)
      container.querySelector(`.${styled.button}.${styled.large}`).should.exist
    })
  })

})

describe('Button.Group', () => {
  it('可以导入', () => {
    Button.Group.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Button.Group className={className} />, container)
    container.querySelector(`.${styled['button-group']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Button.Group style={style} />, container)
    const group: HTMLElement = container.querySelector(`.${styled['button-group']}`)
    group.style.color.should.equal(style.color)
  })

  it('可以设置size', () => {
    const element = <Button.Group size='small'><Button></Button></Button.Group>
    ReactDOM.render(element, container)
    container.querySelector(`.${styled['button-group']} .${styled.button}`).classList.contains(styled.small).should.be.ok
  })

  it('可以设置type', () => {
    const element = <Button.Group type='primary'><Button></Button></Button.Group>
    ReactDOM.render(element, container)
    container.querySelector(`.${styled['button-group']} .${styled.button}`).classList.contains(styled.primary).should.be.ok
  })

  it('可以设置shape', () => {
    const element = <Button.Group shape='round'><Button></Button></Button.Group>
    ReactDOM.render(element, container)
    container.querySelector(`.${styled['button-group']} .${styled.button}`).classList.contains(styled.round).should.be.ok
  })
})