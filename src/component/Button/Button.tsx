import * as React from 'react'
import styled from '@/style/component/Button.scss'
import Icon from '../Icon'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import ButtonGroupContext from './ButtonGroupContext'
import ButtonGroup from './ButtonGroup'
import { IconType, ButtonSize, ButtonType, ButtonShape, ButtonHtmlType } from './Type'

type Group = typeof ButtonGroup

interface State {
  clickAnimating: boolean
}

class Button extends React.Component<Button.Props, State> {
  static displayName = 'Button'
  static Group: Group
  static Size = ButtonSize
  static Type = ButtonType
  static Shape = ButtonShape
  static Icon = IconType
  static HtmlType = ButtonHtmlType
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
  context: ButtonGroupContext
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
      children ? '' : styled['icon-only']
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

namespace Button {
  export interface Props {
    size?: ButtonSize
    type?: ButtonType
    shape?: ButtonShape
    icon?: Icon.Props['type']
    iconRight?: Icon.Props['type']
    disabled?: boolean
    htmlType?: ButtonHtmlType
    className?: string
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler
  }
}

export default Button