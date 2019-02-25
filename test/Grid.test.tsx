import { Col, Row } from '../src'
import * as Mock from 'mockjs'
import * as React from 'react'
import * as sinon from 'sinon'
import * as ReactDOM from 'react-dom'
import styledcol from '@/style/component/Col.scss'
import styledrow from '@/style/component/Row.scss'

chai.should()

let container: HTMLDivElement

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Row', () => {
  it('可以导入', () => {
    Row.should.exist
  })

  it('可以设置className', () => {
    const className = Mock.Random.word(3, 5)
    ReactDOM.render(<Row className={className}></Row>, container)
    container.querySelector(`.${styledrow.row}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Row style={style} ><div></div></Row>, container)
    const row: HTMLElement = container.querySelector(`.${styledrow.row}`)
    row.style.color.should.equal(style.color)
  })

  describe('justify', () => {
    Row.Justify.forEach(justify => {
      it(`可以设置${justify}`, () => {
        ReactDOM.render(<Row justify={justify}></Row>, container)
        container.querySelector(`.${styledrow.row}`).classList.contains(styledrow[`justify-${justify}`]).should.be.ok
      })
    })
  })

  describe('align', () => {
    Row.Align.forEach(align => {
      it(`可以设置${align}`, () => {
        ReactDOM.render(<Row align={align}></Row>, container)
        container.querySelector(`.${styledrow.row}`).classList.contains(styledrow[`align-${align}`]).should.be.ok
      })
    })
  })

  it('可以设置gutter', () => {
    const gutter = Mock.Random.integer(1, 100)
    ReactDOM.render(<Row gutter={gutter}><Col></Col></Row>, container)
    const row: HTMLElement = container.querySelector(`.${styledrow.row}`)
    const col: HTMLElement = row.querySelector(`.${styledcol.col}`)
    row.style.marginLeft.should.equal(`${-gutter / 2}px`)
    row.style.marginRight.should.equal(`${-gutter / 2}px`)
    col.style.paddingLeft.should.equal(`${gutter / 2}px`)
    col.style.paddingRight.should.equal(`${gutter / 2}px`)
  })

  it('可以设置响应式gutter', () => {
    const gutter = {
      xs: Mock.Random.integer(1, 100),
      sm: Mock.Random.integer(1, 100),
      md: Mock.Random.integer(1, 100),
      lg: Mock.Random.integer(1, 100),
      xg: Mock.Random.integer(1, 100),
      xxl: Mock.Random.integer(1, 100),
    }
    ReactDOM.render(<Row gutter={gutter}><Col></Col></Row>, container)
    const row: HTMLElement = container.querySelector(`.${styledrow.row}`)
    const col: HTMLElement = row.querySelector(`.${styledcol.col}`)
    let size = 'xs'
    window.innerWidth > 575 && (size = 'sm')
    window.innerWidth >= 768 && (size = 'md')
    window.innerWidth >= 992 && (size = 'lg')
    window.innerWidth >= 1200 && (size = 'xl')
    window.innerWidth >= 1600 && (size = 'xxl')
    row.style.marginLeft.should.equal(`${-gutter[size] / 2}px`)
    row.style.marginRight.should.equal(`${-gutter[size] / 2}px`)
    col.style.paddingLeft.should.equal(`${gutter[size] / 2}px`)
    col.style.paddingRight.should.equal(`${gutter[size] / 2}px`)
  })
})

describe('Col', () => {
  it('可以设置className', () => {
    const className = Mock.Random.word(3, 5)
    ReactDOM.render(<Row><Col className={className}></Col></Row>, container)
    container.querySelector(`.${styledcol.col}`).classList.contains(className).should.be.ok
  })

  it('可以设置style', () => {
    const style: React.CSSProperties = { color: Mock.Random.rgb() }
    ReactDOM.render(<Col style={style}></Col>, container)
    const col: HTMLElement = container.querySelector(`.${styledcol.col}`)
    col.style.color.should.equal(style.color)
  })
  it('可以导入', () => {
    Col.should.exist
  })
  describe('span', () => {
    Col.Size.forEach(size => {
      it(`可以设置${size}`, () => {
        ReactDOM.render(<Row><Col span={size}></Col></Row>, container)
        container.querySelector(`.${styledcol.col}`).classList.contains(styledcol[`span-${size}`]).should.be.ok
      })
    })
  })
  describe('offset', () => {
    Col.Size.forEach(size => {
      it(`可以设置${size}`, () => {
        ReactDOM.render(<Row><Col offset={size}></Col></Row>, container)
        container.querySelector(`.${styledcol.col}`).classList.contains(styledcol[`offset-${size}`]).should.be.ok
      })
    })
  })
  describe('order', () => {
    Col.Size.forEach(size => {
      it(`可以设置${size}`, () => {
        ReactDOM.render(<Row><Col order={size}></Col></Row>, container)
        container.querySelector(`.${styledcol.col}`).classList.contains(styledcol[`order-${size}`]).should.be.ok
      })
    })
  })
  it('响应式', () => {
    ReactDOM.render(<Row><Col sm='1'></Col></Row>, container)
    container.querySelector(`.${styledcol.col}`).classList.contains(styledcol['span-1'])
    ReactDOM.render(<Row><Col sm={{ span: '1', offset: '1', order: '1' }}></Col></Row>, container)
    container.querySelector(`.${styledcol.col}`).classList.contains(styledcol['span-1'])
    container.querySelector(`.${styledcol.col}`).classList.contains(styledcol['offset-1'])
    container.querySelector(`.${styledcol.col}`).classList.contains(styledcol['order-1'])
  })
})

