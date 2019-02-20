import * as React from 'react'
import styled from '@/style/component/Input.scss'
interface IProps {
  size?: 'small' | 'large'
  disabled?: boolean
  defaultValue?: string
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
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
  private changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange(e)
  }
  private keyPressHandle(e: React.KeyboardEvent<HTMLInputElement>) {
    this.props.onKeyPress && this.props.onKeyPress(e)
    switch (e.key) {
      case 'Enter':
        this.props.onPressEnter && this.props.onPressEnter(e)
    }
  }
  render() {
    const { placeholder, prefix, suffix, defaultValue, disabled } = this.props
    const props = {
      placeholder,
      defaultValue,
      disabled,
      type: 'text',
      onFocus: this.focusHandle.bind(this),
      onBlur: this.blurHandle.bind(this),
      onChange: this.changeHandle.bind(this),
      onKeyPress: this.keyPressHandle.bind(this)
    }
    if (prefix || suffix) {
      return <span className={this.wrapperClasses()} data-disabled={disabled}>
        {prefix ? <span className={styled.prefix}>{prefix}</span> : null}
        <input
          className={styled['innert-input']}
          {...props}
        />
        {suffix ? <span className={styled.suffix}>{suffix}</span> : null}
      </span>
    }
    return <input className={this.classes()} {...props}></input>
  }
}
export default Input