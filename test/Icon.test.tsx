import { Icon } from '../src'
import * as Mock from 'mockjs'
import * as sinon from 'sinon'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

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

describe('Icon', () => {
  it('可以导入', () => {
    Icon.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Icon className={className} type='search' />, container)
    container.querySelector('.s-icon').classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Icon type='search' style={style} />, container)
    const icon: HTMLElement = container.querySelector('.s-icon')
    icon.style.color.should.equal(style.color)
    icon.style.height.should.equal(style.height)
  })

})