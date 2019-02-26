import { Layout } from '../src'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '@/style/component/Layout/Layout.scss'
import styledContent from '@/style/component/Layout/Content.scss'
import styledHeader from '@/style/component/Layout/Header.scss'
import styledFooter from '@/style/component/Layout/Footer.scss'
import styledSider from '@/style/component/Layout/Sider.scss'
import * as Mock from 'mockjs'

chai.should()

describe('Layout', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Layout.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Layout className={className} />, container)
    container.querySelector(`.${styled.layout}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Layout style={style} />, container)
    const layout: HTMLElement = container.querySelector(`.${styled.layout}`)
    layout.style.color.should.equal(style.color)
  })

  it('可以设置hasSider', () => {
    ReactDOM.render(<Layout hasSider> </Layout>, container)
    container.querySelector(`.${styled.layout}`).classList.contains(styled['has-sider']).should.be.ok
  })

  it('自动获取hasSider', () => {
    ReactDOM.render(<Layout><Layout.Sider></Layout.Sider></Layout>, container)
    container.querySelector(`.${styled.layout}`).classList.contains(styled['has-sider']).should.be.ok
  })

})

describe('Layout.Content', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Layout.Content.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Layout><Layout.Content className={className} /></Layout>, container)
    container.querySelector(`.${styledContent['layout-content']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Layout><Layout.Content style={style} /></Layout>, container)
    const content: HTMLElement = container.querySelector(`.${styledContent['layout-content']}`)
    content.style.color.should.equal(style.color)
  })

  it('可以设置children', () => {
    const text = Mock.Random.sentence(1, 10)
    ReactDOM.render(<Layout><Layout.Content>{text}</Layout.Content></Layout>, container)
    const content: HTMLElement = container.querySelector(`.${styledContent['layout-content']}`)
    content.innerHTML.should.equal(text)
  })

  it('不在Layout内', () => {
    ReactDOM.render(<Layout.Content></Layout.Content>, container)
  })
})

describe('Layout.Header', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Layout.Header.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Layout><Layout.Header className={className} /></Layout>, container)
    container.querySelector(`.${styledHeader['layout-header']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Layout><Layout.Header style={style} /></Layout>, container)
    const header: HTMLElement = container.querySelector(`.${styledHeader['layout-header']}`)
    header.style.color.should.equal(style.color)
  })

  it('可以设置children', () => {
    const content = Mock.Random.sentence(1, 10)
    ReactDOM.render(<Layout><Layout.Header>{content}</Layout.Header></Layout>, container)
    const header: HTMLElement = container.querySelector(`.${styledHeader['layout-header']}`)
    header.innerHTML.should.equal(content)
  })

  it('不在Layout内', () => {
    ReactDOM.render(<Layout.Header></Layout.Header>, container)
  })
})

describe('Layout.Sider', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Layout.Footer.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Layout><Layout.Footer className={className} /></Layout>, container)
    container.querySelector(`.${styledFooter['layout-footer']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Layout><Layout.Footer style={style} /></Layout>, container)
    const footer: HTMLElement = container.querySelector(`.${styledFooter['layout-footer']}`)
    footer.style.color.should.equal(style.color)
  })

  it('可以设置children', () => {
    const content = Mock.Random.sentence(1, 10)
    ReactDOM.render(<Layout><Layout.Footer>{content}</Layout.Footer></Layout>, container)
    const footer: HTMLElement = container.querySelector(`.${styledFooter['layout-footer']}`)
    footer.innerHTML.should.equal(content)
  })

  it('不在Layout内', () => {
    ReactDOM.render(<Layout.Footer></Layout.Footer>, container)
  })
})

describe('Layout.Sider', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Layout.Footer.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 10)
    ReactDOM.render(<Layout><Layout.Sider className={className} /></Layout>, container)
    container.querySelector(`.${styledSider['layout-sider']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Layout><Layout.Sider style={style} /></Layout>, container)
    const sider: HTMLElement = container.querySelector(`.${styledSider['layout-sider']}`)
    sider.style.color.should.equal(style.color)
  })

  it('可以设置children', () => {
    const content = Mock.Random.sentence(1, 10)
    ReactDOM.render(<Layout><Layout.Sider>{content}</Layout.Sider></Layout>, container)
    const sider: HTMLElement = container.querySelector(`.${styledSider['layout-sider']}`)
    sider.innerHTML.should.equal(content)
  })

  it('不在Layout内', () => {
    ReactDOM.render(<Layout.Sider></Layout.Sider>, container)
  })
})