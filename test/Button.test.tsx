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

  it('可以触发click事件', (done) => {
    let clickHandle = sinon.fake()
    ReactDOM.render(<Button onClick={clickHandle}></Button>, container)
    Simulate.click(container.querySelector(`.${styled.button}`))
    setTimeout(() => {
      clickHandle.should.has.been.called
      done()
    }, 2001)
  }).timeout(3000)

  it('可以disabled', () => {
    let clickHandle = sinon.fake()
    ReactDOM.render(<Button onClick={clickHandle} disabled></Button>, container)
    clickHandle.should.has.not.been.called
  })

  describe('htmlType', () => {
    Button.HtmlType.forEach(type => {
      it(`可以设置${type}`, () => {
        ReactDOM.render(<Button htmlType={type}></Button>, container)
        container.querySelector(`.${styled.button}`).getAttribute('type').should.equal(type)
      })
    })
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
    Button.Shape.forEach(shape => {
      it(`可以设置${shape}`, () => {
        ReactDOM.render(<Button shape={shape}></Button>, container)
        container.querySelector(`.${styled.button}.${styled[shape]}`).should.exist
      })
    })
  })

  describe('type', () => {
    Button.Type.forEach(type => {
      it(`可以设置${type}`, () => {
        ReactDOM.render(<Button type={type}></Button>, container)
        container.querySelector(`.${styled.button}.${styled[type]}`).should.exist
      })
    })
  })

  describe('size', () => {
    Button.Size.forEach(size => {
      it(`可以设${size}`, () => {
        ReactDOM.render(<Button size={size}></Button>, container)
        container.querySelector(`.${styled.button}.${styled[size]}`).should.exist
      })
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

  describe('size', () => {
    Button.Group.Size.forEach(size => {
      it(`可以设置${size}`, () => {
        const element = <Button.Group size={size}><Button></Button></Button.Group>
        ReactDOM.render(element, container)
        container.querySelector(`.${styled['button-group']} .${styled.button}`).classList.contains(styled[size]).should.be.ok
      })
    })
  })

  describe('type', () => {
    Button.Group.Type.forEach(type => {
      it(`可以设置${type}`, () => {
        const element = <Button.Group type={type}><Button></Button></Button.Group>
        ReactDOM.render(element, container)
        container.querySelector(`.${styled['button-group']} .${styled.button}`).classList.contains(styled[type]).should.be.ok
      })
    })
  })

  describe('shape', () => {
    Button.Group.Shape.forEach(shape => {
      it(`可以设置${shape}`, () => {
        const element = <Button.Group shape={shape}><Button></Button></Button.Group>
        ReactDOM.render(element, container)
        container.querySelector(`.${styled['button-group']} .${styled.button}`).classList.contains(styled[shape]).should.be.ok
      })
    })
  })

})