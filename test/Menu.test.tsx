import { Menu } from '../src'
import * as Mock from 'mockjs'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sinon from 'sinon'
import styled from '@/style/component/Menu/Menu.scss'
import styledItem from '@/style/component/Menu/Item.scss'
import styledSub from '@/style/component/Menu/SubMenu.scss'
import styledGroup from '@/style/component/Menu/ItemGroup.scss'
import { Simulate } from 'react-dom/test-utils'

chai.should()

describe('Menu', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Menu.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 8)
    ReactDOM.render(<Menu className={className} activeName='1' />, container)
    container.querySelector(`.${styled.menu}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb(), height: `${Mock.Random.natural(0, 100)}px` }
    ReactDOM.render(<Menu style={style} activeName='1' opens={[]} />, container)
    const menu: HTMLElement = container.querySelector(`.${styled.menu}`)
    menu.style.color.should.equal(style.color)
    menu.style.height.should.equal(style.height)
  })

  it('可以设置触发onChange', () => {
    const fake = sinon.fake()
    const name = Mock.Random.word(3, 5)
    ReactDOM.render(<Menu activeName='2' onChange={fake}>
      <Menu.Item name={name}></Menu.Item>
      <Menu.Item name='2'></Menu.Item>
    </Menu>, container)
    Simulate.click(container.querySelector(`.${styledItem['menu-item']}`))
    fake.should.has.been.calledWith(name)
  })

  it('可以设置触发onOpenChange', () => {
    const fake = sinon.fake()
    const name = Mock.Random.word(3, 5)
    ReactDOM.render(<Menu activeName='2' onOpenChange={fake}>
      <Menu.SubMenu name={name} title='title'>
        <Menu.Item name='2'></Menu.Item>
      </Menu.SubMenu>
    </Menu>, container)
    Simulate.click(container.querySelector(`.${styledSub.title}`))
    fake.should.has.been.calledWith([name])
  })

  describe('Menu.SubMenu', () => {
    it('可以导入', () => {
      Menu.SubMenu.should.exist
    })

    it('可以设置className', () => {
      const className = Mock.Random.word(3, 8)
      ReactDOM.render(<Menu activeName='1'>
        <Menu.SubMenu className={className} name='1' title='1'>
        </Menu.SubMenu>
      </Menu>, container)
      container.querySelector(`.${styledSub['menu-submenu']}`).classList.contains(className).should.be.ok
    })

    it('可以设置style', () => {
      const style: React.CSSProperties = { color: Mock.Random.rgb(), width: `${Mock.Random.natural(0, 100)}px` }
      ReactDOM.render(<Menu activeName='1'>
        <Menu.SubMenu name='1' title='1' style={style}></Menu.SubMenu>
      </Menu>, container)
      const menu: HTMLElement = container.querySelector(`.${styledSub['menu-submenu']}`)
      menu.style.color.should.equal(style.color)
      menu.style.width.should.equal(style.width)
    })

    it('可以设置open', () => {
      ReactDOM.render(<Menu activeName='1' opens={['1']}>
        <Menu.SubMenu name='1' title='1'></Menu.SubMenu>
      </Menu>, container)
      const menu: HTMLElement = container.querySelector(`.${styledSub['menu-submenu']}`)
      menu.classList.contains(styledSub.active).should.be.ok
    })

    it('可以设置disabled', () => {
      ReactDOM.render(<Menu activeName='1' opens={['1']}>
        <Menu.SubMenu name='1' title='1' disabled></Menu.SubMenu>
      </Menu>, container)
      const menu: HTMLElement = container.querySelector(`.${styledSub['menu-submenu']}`)
      menu.classList.contains(styledSub.disabled).should.be.ok
    })

    it('可以open传递', () => {
      const fake = sinon.fake()
      ReactDOM.render(<Menu activeName='1' opens={['1']} onOpenChange={fake}>
        <Menu.SubMenu name='1' title='1'>
          <Menu.SubMenu name='2' title='2' />
        </Menu.SubMenu>
      </Menu>, container)
      const menu: HTMLElement = container.querySelector(`.${styledSub['menu-submenu']} .${styledSub['menu-submenu']}`)
      Simulate.click(menu.querySelector(`.${styledSub.title}`))
      fake.should.has.been.calledWith(['2', '1'])
    })

    it('可以关闭open', (done) => {
      const fake = sinon.fake()
      function Demo() {
        const [opens, setOpens] = React.useState(['1'])
        return <Menu activeName='1' opens={opens} onOpenChange={(opens) => { setOpens(opens); fake(opens) }}>
          <Menu.SubMenu name='1' title='1'>
            <Menu.Item name='2'></Menu.Item>
          </Menu.SubMenu>
        </Menu>
      }
      ReactDOM.render(<Demo></Demo>, container)
      const menu: HTMLElement = container.querySelector(`.${styledSub['menu-submenu']}`)
      Simulate.click(menu.querySelector(`.${styledItem['menu-item']}`))
      Simulate.click(menu.querySelector(`.${styledSub.title}`))
      fake.should.has.been.calledWith([])
      setTimeout(() => {
        Simulate.click(menu.querySelector(`.${styledSub.title}`))
        setTimeout(done, 301)
      }, 0)
    })
  })

  describe('Menu.Item', () => {
    it('可以导入', () => {
      Menu.Item.should.exist
    })

    it('可以设置className', () => {
      const className = Mock.Random.word(3, 8)
      ReactDOM.render(<Menu activeName='1'>
        <Menu.Item className={className} name='1'>
        </Menu.Item>
      </Menu>, container)
      container.querySelector(`.${styledItem['menu-item']}`).classList.contains(className).should.be.ok
    })

    it('可以设置style', () => {
      const style: React.CSSProperties = { color: Mock.Random.rgb(), width: `${Mock.Random.natural(0, 100)}px` }
      ReactDOM.render(<Menu activeName='1'>
        <Menu.Item name='1' style={style}></Menu.Item>
      </Menu>, container)
      const item: HTMLElement = container.querySelector(`.${styledItem['menu-item']}`)
      item.style.color.should.equal(style.color)
      item.style.width.should.equal(style.width)
    })

    it('可以触发change', () => {
      const fake = sinon.fake()
      ReactDOM.render(<Menu activeName='1' onChange={fake}>
        <Menu.Item name='1'></Menu.Item>
      </Menu>, container)
      const item = container.querySelector(`.${styledItem['menu-item']}`)
      Simulate.click(item)
      fake.should.has.been.calledWith('1')
    })

    it('可以设置disabled', () => {
      const fake = sinon.fake()
      ReactDOM.render(<Menu activeName='1' onChange={fake}>
        <Menu.Item name='1' disabled></Menu.Item>
      </Menu>, container)
      const item = container.querySelector(`.${styledItem['menu-item']}`)
      item.classList.contains(styledSub.disabled).should.be.ok
      Simulate.click(item)
      fake.should.has.not.been.called
    })
    it('可以触发click', () => {
      const fake = sinon.fake()
      ReactDOM.render(<Menu activeName='1'>
        <Menu.Item name='1' onClick={fake}></Menu.Item>
      </Menu>, container)
      Simulate.click(container.querySelector(`.${styledItem['menu-item']}`))
      fake.should.has.been.called
    })
  })

  describe('Menu.ItemGroup', () => {
    it('可以导入', () => {
      Menu.ItemGroup.should.exist
    })

    it('可以设置className', () => {
      const className = Mock.Random.word(3, 8)
      ReactDOM.render(<Menu activeName='1'>
        <Menu.ItemGroup title='123' className={className}>
          <Menu.Item name='1'>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>, container)
      container.querySelector(`.${styledGroup['menu-item-group']}`).classList.contains(className).should.be.ok
    })

    it('可以设置style', () => {
      const style: React.CSSProperties = { color: Mock.Random.rgb(), width: `${Mock.Random.natural(0, 100)}px` }
      ReactDOM.render(<Menu activeName='1'>
        <Menu.ItemGroup title='123' style={style}>
          <Menu.Item name='1'>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>, container)
      const group: HTMLElement = container.querySelector(`.${styledGroup['menu-item-group']}`)
      group.style.color.should.equal(style.color)
      group.style.width.should.equal(style.width)
    })
  })
})