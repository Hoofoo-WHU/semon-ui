import { Message } from '../src'
import * as Mock from 'mockjs'
import * as sinon from 'sinon'
import styled from '../src/style/component/Message.scss'

chai.should()

let container: HTMLDivElement

describe('Message', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    Message.distroy()
    container.remove()
    container = null
  })

  it('可以导入', () => {
    Message.should.exist
  })

  it('可以config', (done) => {
    Message.config({ container, duration: 1 })
    let message = Mock.Random.sentence(1, 3)
    let fake = sinon.fake()
    Message.notice(message, fake)
    setTimeout(() => {
      fake.should.has.been.called
      done()
    }, 2)
  })

  it('可以success', () => {
    Message.config({ container, duration: 100 })
    let message = Mock.Random.sentence(1, 3)
    Message.success(message)
    let notice: HTMLElement = container.querySelector(`.${styled.success}`)
    notice.should.exist
    notice.innerText.should.equal(message)
  })

  it('可以error', () => {
    Message.config({ container, duration: 100 })
    let message = Mock.Random.sentence(1, 3)
    Message.error(message)
    let notice: HTMLElement = container.querySelector(`.${styled.error}`)
    notice.should.exist
    notice.innerText.should.equal(message)
  })

  it('可以info', () => {
    Message.config({ container, duration: 100 })
    let message = Mock.Random.sentence(1, 3)
    Message.info(message)
    let notice: HTMLElement = container.querySelector(`.${styled.info}`)
    notice.should.exist
    notice.innerText.should.equal(message)
  })

  it('可以warn', () => {
    Message.config({ container, duration: 100 })
    let message = Mock.Random.sentence(1, 3)
    Message.warn(message)
    let notice: HTMLElement = container.querySelector(`.${styled.warn}`)
    notice.should.exist
    notice.innerText.should.equal(message)
  })

  it('可以notice', () => {
    Message.config({ container, duration: 100 })
    let message = Mock.Random.sentence(1, 3)
    Message.notice(message)
    let notice: HTMLElement = container.querySelector(`.${styled.notice}`)
    notice.should.exist
    notice.innerText.should.equal(message)
  })

  it('可以手动关闭', (done) => {
    Message.config({ container, duration: 0 })
    let message = Mock.Random.sentence(1, 3)
    const remove = Message.notice(message)
    let notice: HTMLElement = container.querySelector(`.${styled.notice}`)
    notice.should.exist
    notice.innerText.should.equal(message)
    remove()
    notice = container.querySelector(`.${styled.notice}`)
    setTimeout(() => {
      done()
    }, 700)
  })

  it('可以触发onClose', (done) => {
    Message.config({ container, duration: 10 })
    let message = Mock.Random.sentence(1, 3)
    let fake = sinon.fake()
    Message.notice(message, fake)
    setTimeout(() => {
      fake.should.has.been.called
      done()
    }, 11)
  })

  it('可以设置duration', (done) => {
    Message.config({ container, duration: 1000 })
    let message = Mock.Random.sentence(1, 3)
    let fake = sinon.fake()
    Message.notice(message, 1, fake)
    setTimeout(() => {
      fake.should.has.been.called
      done()
    }, 2)
  })

})