import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '@/style/component/Message.scss'
import Icon from './Icon'

type NoticeType = 'info' | 'error' | 'warn' | 'success'

const _animationTime = 300

const _options: Message.Option = {
  container: document.body,
  duration: 3000
}

let _messageRoot = document.createElement('div')
_messageRoot.className = styled.message

function _init() {
  const container = _options.container
  if (!container.contains(_messageRoot)) {
    container.appendChild(_messageRoot)
  }
}

function _distroy() {
  _messageRoot.remove()
  _messageRoot = document.createElement('div')
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
  _init()
  const notice = document.createElement('div')
  notice.classList.add(styled.notice)
  notice.style.transition = `all ${_animationTime}ms`
  type && notice.classList.add(styled[type])
  const contentFragment = <React.Fragment>{content}</React.Fragment>
  ReactDOM.render(contentFragment, notice)
  _messageRoot.append(notice)
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
      }, _animationTime)
    }, _animationTime)
    _onClose && _onClose()
    clearTimeout(id)
  }
}

type NoticeFunction = {
  (content: React.ReactNode, onClose?: Function): Function;
  (content: React.ReactNode, duration: number, onClose?: Function): Function;
}

function notice(content: React.ReactNode, durationOrOnClose?: number | Function, onClose?: Function) {
  return _notice(content, durationOrOnClose, onClose)
}

class Message {
  static notice: NoticeFunction = notice
  static success: NoticeFunction
  static info: NoticeFunction
  static warn: NoticeFunction
  static error: NoticeFunction
  static config = ({ container, duration }: Message.Option) => {
    if (container) {
      _distroy()
      _options.container = container
    }
    duration && (_options.duration = duration)
  }
  static readonly distroy = _distroy
}

const _noticeTypes: { name: NoticeType, icon: Icon.Props['type'] }[] = [
  { name: 'info', icon: 'info-circle-fill' },
  { name: 'error', icon: 'close-circle-fill' },
  { name: 'warn', icon: 'warning-circle-fill' },
  { name: 'success', icon: 'check-circle-fill' }
]

_noticeTypes.forEach(type => {
  Message[type.name] = function (content: React.ReactNode, durationOrOnClose?: number | Function, onClose?: Function) {
    return _notice(<React.Fragment><Icon type={type.icon} className={styled['notice-icon']} />{content}</React.Fragment>, durationOrOnClose, onClose, type.name as NoticeType)
  }
})

namespace Message {
  export interface Option {
    container?: Element
    duration?: number
  }
}

export default Message