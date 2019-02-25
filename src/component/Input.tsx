import * as React from 'react'
import styled from '@/style/component/Input.scss'
import classMerge from '../until/class-merge'
import { tuple } from '../until/type'
import * as PropTypes from 'prop-types'

const InputSize = tuple('small', 'large')
type InputSize = typeof InputSize[number]

const propTypes = {
  size: PropTypes.oneOf(InputSize),
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  onKeyPress: PropTypes.func,
}

class Input extends React.Component<Input.Props> {
  static displayName = 'Input'
  static propTypes = propTypes

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
    switch (e.key.toLowerCase()) {
      case 'enter':
        this.props.onPressEnter && this.props.onPressEnter(e)
    }
  }

  private renderAffixInput() {
    const { placeholder, prefix, suffix, defaultValue, value, disabled, readOnly, className, size } = this.props
    const props = {
      placeholder,
      defaultValue,
      value,
      disabled,
      readOnly,
      onFocus: this.focusHandle.bind(this),
      onBlur: this.blurHandle.bind(this),
      onChange: this.changeHandle.bind(this),
      onKeyPress: this.keyPressHandle.bind(this)
    }
    const classes = classMerge(
      className,
      styled.input,
      styled['input-wrapper-affix-wrapper'],
      styled[size]
    )
    return <span className={classes} data-disabled={disabled}>
      {prefix ? <span className={styled.prefix}>{prefix}</span> : null}
      <input
        className={styled['innert-input']}
        {...props}
      />
      {suffix ? <span className={styled.suffix}>{suffix}</span> : null}
    </span>
  }

  renderInput() {
    const { placeholder, defaultValue, value, disabled, readOnly, className, size } = this.props
    const props = {
      placeholder,
      defaultValue,
      value,
      disabled,
      readOnly,
      onFocus: this.focusHandle.bind(this),
      onBlur: this.blurHandle.bind(this),
      onChange: this.changeHandle.bind(this),
      onKeyPress: this.keyPressHandle.bind(this)
    }
    const classes = classMerge(
      className,
      styled.input,
      styled[size]
    )
    return <input className={classes} {...props} />
  }

  render() {
    const { prefix, suffix } = this.props
    if (prefix || suffix) {
      return this.renderAffixInput()
    }
    return this.renderInput()
  }
}

namespace Input {
  export interface Props {
    size?: InputSize
    disabled?: boolean
    defaultValue?: string
    value?: string
    placeholder?: string
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    className?: string
    readOnly?: boolean
    onFocus?: React.FocusEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
  }
  export const Size = InputSize
}

export default Input
