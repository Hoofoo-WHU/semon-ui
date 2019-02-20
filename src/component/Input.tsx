import * as React from 'react'
import styled from '@/style/component/Input.scss'
interface IProps {
  size?: 'small' | 'large'
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler

}


class Input extends React.Component<IProps> {
  static displayName = 'Input'
  private classes() {
    const { size } = this.props
    const classes = [styled.input]
    size && classes.push(styled[size])
    return classes.join(' ')
  }
  private wrapperClasses() {
    const { size } = this.props
    const classes = [styled.input, styled['input-wrapper-affix-wrapper']]
    size && classes.push(styled[size])
    return classes.join(' ')
  }
  private focusHandle(e: React.FocusEvent<HTMLInputElement>) {
    this.props.onFocus && this.props.onFocus(e)
  }
  private blurHandle(e: React.FocusEvent<HTMLInputElement>) {
    this.props.onBlur && this.props.onBlur(e)
  }
  render() {
    const { placeholder, prefix, suffix } = this.props
    if (prefix || suffix) {
      return <span className={this.wrapperClasses()}>
        {prefix ? <span className={styled.prefix}>{prefix}</span> : null}
        <input
          className={styled['innert-input']}
          onFocus={this.focusHandle.bind(this)}
          onBlur={this.blurHandle.bind(this)}
          placeholder={placeholder}
          type='text'
        />
        {suffix ? <span className={styled.suffix}>{suffix}</span> : null}
      </span>
    }
    return <input className={this.classes()} placeholder={placeholder}></input>
  }
}
export default Input