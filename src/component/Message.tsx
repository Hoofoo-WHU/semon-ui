import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '@/style/component/Message.scss'
import Icon from './Icon'
import { types } from './Icon/SVG';

export interface IMessageOptions {
  container?: Element
  duration?: number
}
type NoticeType = 'info' | 'error' | 'warn' | 'success'
const _options: IMessageOptions = {
  container: document.body,
  duration: 3000
}

const animationTime = 300

const messageRoot = document.createElement('div')
messageRoot.className = styled.message

function init() {
  const container = _options.container
  if (!container.contains(messageRoot)) {
    container.appendChild(messageRoot)
  }
}

function distroy() {
  messageRoot.remove()
}

function _notice(content: React.ReactNode, durationOrOnClose?: number | Function, onClose?: Function, type?: NoticeType) {
  let _duration = _options.duration
  let _onClose: Function
  if (durationOrOnClose || durationOrOnClose === 0) {
    if (typeof durationOrOnClose === 'number') {
      _duration = durationOrOnClose
      onClose && (_onClose = onClose)
    }
    if (typeof durationOrOnClose === 'function') {
      _onClose = durationOrOnClose
    }
  }
  init()
  const notice = document.createElement('div')
  notice.classList.add(styled.notice)
  notice.style.transition = `all ${animationTime / 1000}s`
  type && notice.classList.add(styled[type])
  const contentFragment = <React.Fragment>{content}</React.Fragment>
  ReactDOM.render(contentFragment, notice)
  messageRoot.append(notice)
  setTimeout(() => { notice.classList.add(styled.active) }, 50)

  let id: NodeJS.Timeout
  if (_duration !== 0) {
    setTimeout(() => {
      remove()
    }, _duration)
  }
  return remove

  function remove() {
    notice.style.height = notice.offsetHeight + 'px'
    notice.classList.add(styled.hide)
    setTimeout(() => {
      notice.classList.add(styled['hide-2'])
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(notice)
        notice.remove()
      }, animationTime)
    }, animationTime)
    _onClose && _onClose()
    clearTimeout(id)
  }
}

export type NoticeFunction = {
  (content: React.ReactNode, onClose?: Function): Function;
  (content: React.ReactNode, duration: number, onClose?: Function): Function;
}
function notice(content: React.ReactNode, durationOrOnClose?: number | Function, onClose?: Function) {
  return _notice(content, durationOrOnClose, onClose)
}

class Message {
  static readonly notice: NoticeFunction = notice
  static readonly success: NoticeFunction
  static readonly info: NoticeFunction
  static readonly warn: NoticeFunction
  static readonly error: NoticeFunction
  static readonly config = ({ container, duration }: IMessageOptions) => {
    if (container) {
      distroy()
      _options.container = container
    }
    duration && (_options.duration = duration)
  }
  static readonly distroy = () => {
    distroy()
  }
}

const NoticeTypes: { name: string, icon: types }[] = [
  { name: 'info', icon: 'info-circle-fill' },
  { name: 'error', icon: 'close-circle-fill' },
  { name: 'warn', icon: 'warning-circle-fill' },
  { name: 'success', icon: 'check-circle-fill' }
]
NoticeTypes.forEach(type => {
  Message[type.name] = function (content: React.ReactNode, durationOrOnClose?: number | Function, onClose?: Function) {
    return _notice(<React.Fragment><Icon type={type.icon} className={styled['notice-icon']} />{content}</React.Fragment>, durationOrOnClose, onClose, type.name as NoticeType)
  }
})

export default Message