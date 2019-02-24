import * as React from 'react'
import styled from '@/style/component/Button.scss'
import Icon from './Icon'
import classMerge from '../until/class-merge'
import * as PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'
import { tuple } from '../until/type'

const ButtonSize = tuple('small', 'large')
type ButtonSize = typeof ButtonSize[number]

const ButtonType = tuple('primary', 'dashed', 'danger')
type ButtonType = typeof ButtonType[number]

const ButtonShape = tuple('round', 'circle')
type ButtonShape = typeof ButtonShape[number]

const ButtonHtmlType = tuple('submit', 'reset', 'text')
type ButtonHtmlType = typeof ButtonHtmlType[number]

interface IButtonGroupContext {
  size?: ButtonSize
  type?: ButtonType
  shape?: ButtonShape
  disabled?: boolean
}

export interface IButtonProps {
  size?: ButtonSize
  type?: ButtonType
  shape?: ButtonShape
  icon?: Icon.Type
  iconRight?: Icon.Type
  disabled?: boolean
  htmlType?: ButtonHtmlType
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
}

interface IState {
  clickAnimating: boolean
}

const ButtonGroupContext = React.createContext<IButtonGroupContext>({})

class Button extends React.Component<IButtonProps, IState> {
  static displayName = 'Button'
  static contextType = ButtonGroupContext
  static propTypes = {
    size: PropTypes.oneOf(ButtonSize),
    type: PropTypes.oneOf(ButtonType),
    shape: PropTypes.oneOf(ButtonShape),
    icon: PropTypes.oneOf(Icon.Type),
    iconRight: PropTypes.oneOf(Icon.Type),
    disabled: PropTypes.bool,
    htmlType: PropTypes.oneOf(ButtonHtmlType),
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
  }

  private _animatingTimer: NodeJS.Timeout
  context: IButtonGroupContext
  readonly state = {
    clickAnimating: false
  }

  onClick(e: React.MouseEvent) {
    clearTimeout(this._animatingTimer)
    this.setState({ clickAnimating: false })
    setTimeout(() => this.setState({ clickAnimating: true }), 16)
    this._animatingTimer = setTimeout(() => this.setState({ clickAnimating: false }), 2000)
    this.props.onClick && this.props.onClick(e)
  }

  render() {
    const { className, size, type, shape, children, icon, iconRight, htmlType, disabled, style } = this.props
    const classes = classMerge(...[
      className, styled.button,
      styled[this.context.size || size],
      styled[this.context.type || type],
      styled[this.context.shape || shape],
      children ? styled['icon-only'] : ''
    ])
    return (
      <button
        className={classes}
        style={style}
        onClick={this.onClick.bind(this)}
        disabled={this.context.disabled || disabled}
        type={htmlType}
        data-click-animating={this.state.clickAnimating ? '' : undefined}
      >
        {icon ? <Icon type={icon} /> : ''}
        {children ? <span>{children}</span> : ''}
        {iconRight ? <Icon type={iconRight} /> : ''}
      </button >)
  }
}

export interface IButtonGroupProps extends React.Props<{}> {
  size?: ButtonSize
  type?: ButtonType
  shape?: ButtonShape
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

class _Group extends React.Component<IButtonGroupProps> {
  static displayName = 'Button.Group'
  static propTypes: object = {
    size: PropTypes.oneOf(ButtonSize),
    type: PropTypes.oneOf(ButtonType),
    shape: PropTypes.oneOf(ButtonShape),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: childrenOfType(Button)
  }
  render() {
    const { type, size, shape, disabled, className, children, style } = this.props
    const classes = classMerge(...[
      className,
      styled['button-group']
    ])
    return (
      <ButtonGroupContext.Provider value={{ size, type, shape, disabled }}>
        <div className={classes} style={style}>{children}</div>
      </ButtonGroupContext.Provider>
    )
  }
}

namespace Button {
  export const Group = _Group
}

export default Button