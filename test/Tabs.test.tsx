import { Tabs } from '../src'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '@/style/component/Tabs/Tabs.scss'
import styledNav from '@/style/component/Tabs/Nav.scss'
import styledTab from '@/style/component/Tabs/Tab.scss'
import styledContent from '@/style/component/Tabs/Content.scss'
import styledPanel from '@/style/component/Tabs/Panel.scss'
import * as Mock from 'mockjs'
import { Simulate } from 'react-dom/test-utils'
import * as sinon from 'sinon'

chai.should()

const { Nav, Tab, Content, Panel } = Tabs

describe('Tabs', () => {
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
    Tabs.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Tabs className={className} activeName='1' />, container)
    container.querySelector(`.${styled.tabs}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Tabs activeName='1' style={style} />, container)
    const tabs: HTMLElement = container.querySelector(`.${styled.tabs}`)
    tabs.style.color.should.equal(style.color)
    tabs.style.height.should.equal(style.height)
  })

  it('可以设置activeName', () => {
    const name = Mock.Random.word(3, 5)
    ReactDOM.render(<Tabs activeName={name}>
      <Nav>
        <Tab name={name}></Tab>
      </Nav>
    </Tabs>, container)
    container.querySelector(`.${styled.tabs} .${styledTab['tabs-tab']}`).classList.contains(styledTab.selected).should.be.ok
  })

  describe('tabPosition', () => {
    Tabs.TabPosition.forEach(pos => {
      it(`可以设置${pos}`, () => {
        ReactDOM.render(<Tabs activeName='1' tabPosition={pos}>
          <Nav>
            <Tab name='1'></Tab>
          </Nav>
          <Content>
            <Panel name='1'></Panel>
          </Content>
        </Tabs>, container)
        if (pos !== 'top') {
          let tabs = container.querySelector(`.${styled.tabs}.${styled[`position-${pos}`]}`)
          tabs.should.exist
          let nav = tabs.querySelector(`.${styledNav['tabs-nav']}.${styledNav[pos]}`)
          nav.should.exist
          if (pos !== 'bottom') {
            nav.querySelector(`.${styledTab['tabs-tab']}.${styledTab[pos]}`).should.exist
            let content = tabs.querySelector(`.${styledContent['tabs-content']}.${styledContent[pos]}`)
            content.should.exist
          }
        }
      })
    })
  })

  describe('size', () => {
    Tabs.Size.forEach(size => {
      it(`可以设置${size}`, () => {
        ReactDOM.render(<Tabs activeName='' size={size}>
          <Nav>
            <Tab name='1'></Tab>
          </Nav>
        </Tabs>, container)
        if (size === 'default') {
          container.querySelector(`.${styled.tabs} .${styledTab['tabs-tab']}`).should.exist
        } else {
          container.querySelector(`.${styled.tabs} .${styledTab['tabs-tab']}`).classList.contains(styledTab[size]).should.be.ok
        }
      })
    })
  })

  it(`可以触发onChange`, () => {
    const fake = sinon.fake()
    const name = Mock.Random.word(2, 3)
    ReactDOM.render(<Tabs activeName='1' onChange={fake}>
      <Nav>
        <Tab name={name}></Tab>
        <Tab name='1'></Tab>
      </Nav>
      <Content>
        <Panel name={name}></Panel>
        <Panel name='1'></Panel>
      </Content>
    </Tabs>, container)
    let tab = container.querySelector(`.${styled.tabs} .${styledTab['tabs-tab']}`)
    Simulate.click(tab)
    fake.should.has.been.calledWith(name)
  })
})

describe('Tabs.Nav', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以引入', () => {
    Tabs.Nav.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Tabs.Nav className={className} />, container)
    container.querySelector(`.${styledNav['tabs-nav']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Tabs.Nav style={style} />, container)
    const nav: HTMLElement = container.querySelector(`.${styledNav['tabs-nav']}`)
    nav.style.color.should.equal(style.color)
    nav.style.height.should.equal(style.height)
  })

  it('可以响应tabPosition', () => {
    class App extends React.Component<any, any> {
      state = {
        position: 'top'
      }
      componentDidMount() {
        this.setState({ position: 'left' })
      }
      render() {
        return <Tabs activeName='1' tabPosition={this.state.position as Tabs.Props['tabPosition']}>
          <Nav>
          </Nav>
        </Tabs>
      }
    }
    ReactDOM.render(<App></App>, container)
    container.querySelector(`.${styled.tabs}.${styled['position-left']}`).should.exist
  })

  it('可以响应tabSize', () => {
    class App extends React.Component<any, any> {
      state = {
        size: 'small',
        active: '1'
      }
      componentDidMount() {
        this.setState({ size: 'large', active: '2' })
      }
      render() {
        return <Tabs activeName={this.state.active} size={this.state.size as Tabs.Props['size']}>
          <Nav>
            <Tab name='2'></Tab>
            <Tab name='1'></Tab>
          </Nav>
        </Tabs>
      }
    }
    ReactDOM.render(<App></App>, container)
    container.querySelector(`.${styledTab['tabs-tab']}.${styledTab.large}`).should.exist
  })

  it('name必须唯一', () => {
    ReactDOM.render(<Tabs activeName='1'>
      <Tabs.Nav>
        <Tabs.Tab name='1'></Tabs.Tab>
        <Tabs.Tab name='1'></Tabs.Tab>
      </Tabs.Nav>
    </Tabs>, container)
    container.querySelector('.error').should.exist
  })
})

describe('Tabs.Tab', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以引入', () => {
    Tabs.Tab.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Tab className={className} name='1' />, container)
    container.querySelector(`.${styledTab['tabs-tab']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Nav><Tab name='1' style={style} /></Nav>, container)
    const tab: HTMLElement = container.querySelector(`.${styledTab['tabs-tab']}`)
    tab.style.color.should.equal(style.color)
    tab.style.height.should.equal(style.height)
  })

  it('可以设置disabled', () => {
    ReactDOM.render(<Tabs activeName='1'><Nav><Tab disabled name='1' /></Nav></Tabs>, container)
    container.querySelector(`.${styledTab['tabs-tab']}`).classList.contains(styledTab.disabled).should.be.ok
  })
})

describe('Tabs.Content', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以引入', () => {
    Tabs.Content.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Content className={className} />, container)
    container.querySelector(`.${styledContent['tabs-content']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Tabs activeName='1'><Content style={style} /></Tabs>, container)
    const content: HTMLElement = container.querySelector(`.${styledContent['tabs-content']}`)
    content.style.color.should.equal(style.color)
    content.style.height.should.equal(style.height)
  })

  it('name必须唯一', () => {
    ReactDOM.render(<Tabs activeName='1'>
      <Content>
        <Panel name='1'></Panel>
        <Panel name='1'></Panel>
      </Content>
    </Tabs>, container)
    container.querySelector('.error').should.exist
  })

  it('可以处理Panel不存在', () => {
    class App extends React.Component<any, any> {
      state = {
        position: 'top'
      }
      componentDidMount() {
        this.setState({ position: 'left' })
      }
      render() {
        return <Tabs activeName='1' tabPosition={this.state.position as Tabs.Props['tabPosition']}>
          <Content>
          </Content>
        </Tabs>
      }
    }
    ReactDOM.render(<App></App>, container)
    container.querySelector(`.${styledContent['tabs-content']}.${styledContent.left}`).should.exist
  })

  it('可以响应tabPosition', () => {
    class App extends React.Component<any, any> {
      state = {
        position: 'top'
      }
      componentDidMount() {
        this.setState({ position: 'left' })
      }
      render() {
        return <Tabs activeName='1' tabPosition={this.state.position as Tabs.Props['tabPosition']}>
          <Content>
            <Panel name='1'></Panel>
          </Content>
        </Tabs>
      }
    }
    ReactDOM.render(<App></App>, container)
    container.querySelector(`.${styledContent['tabs-content']}.${styledContent.left}`).should.exist
  })

  it('可以响应activeName', () => {
    class App extends React.Component<any, any> {
      state = {
        active: '1'
      }
      componentDidMount() {
        this.setState({ active: '2' })
      }
      render() {
        return <Tabs activeName={this.state.active}>
          <Content>
            <Panel name='1'></Panel>
            <Panel name='2'></Panel>
          </Content>
        </Tabs>
      }
    }
    ReactDOM.render(<App></App>, container)
    container.querySelector(`.${styledContent['tabs-content']}.${styledContent.animate}`).should.exist
  })
})

describe('Tabs.Panel', () => {
  let container: Element

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以引入', () => {
    Tabs.Panel.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Panel className={className} name='1' />, container)
    container.querySelector(`.${styledPanel['tabs-panel']}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Content><Panel name='1' style={style} /></Content>, container)
    const panel: HTMLElement = container.querySelector(`.${styledPanel['tabs-panel']}`)
    panel.style.color.should.equal(style.color)
    panel.style.height.should.equal(style.height)
  })
})