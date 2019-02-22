import * as React from 'react'
import styled from '@/style/component/Button.scss'
import Icon from './Icon'

interface IButtonGroupContext {
  size?: IProps['size']
  type?: IProps['type']
  shape?: IProps['shape']
  disabled?: boolean
}
const ButtonGroupContext = React.createContext<IButtonGroupContext>({})

interface IProps {
  size?: 'small' | 'large'
  type?: 'primary' | 'dashed' | 'danger'
  shape?: 'round' | 'circle'
  icon?: Icon.types
  iconRight?: Icon.types
  disabled?: boolean
  htmlType?: string
  className?: string
  onClick?: React.MouseEventHandler
}
interface IState {
  clickAnimating: boolean
}
class Button extends React.Component<IProps, IState> {
  static contextType = ButtonGroupContext
  static displayName = 'Button'
  private animatingTimer: NodeJS.Timeout
  context: IButtonGroupContext
  readonly state = {
    clickAnimating: false
  }
  private classes() {
    const classes = []
    this.props.className && classes.push(this.props.className)
    classes.push(styled['button'])
    if (this.context.size) {
      classes.push(styled[this.context.size])
    } else {
      this.props.size && classes.push(styled[this.props.size])
    }
    if (this.context.type) {
      classes.push(styled[this.context.type])
    } else {
      this.props.type && classes.push(styled[this.props.type])
    }
    if (this.context.shape) {
      classes.push(styled[this.context.shape])
    } else {
      this.props.shape && classes.push(styled[this.props.shape])
    }
    this.props.children || classes.push(styled['icon-only'])
    return classes.join(' ')
  }
  onClick(e: React.MouseEvent) {
    clearTimeout(this.animatingTimer)
    this.setState({ clickAnimating: false })
    setTimeout(() => this.setState({ clickAnimating: true }), 16)
    this.animatingTimer = setTimeout(() => this.setState({ clickAnimating: false }), 2000)
    this.props.onClick && this.props.onClick(e)
  }
  render() {
    return (
      <button
        tabIndex={-1}
        className={this.classes()}
        onClick={this.onClick.bind(this)}
        disabled={this.props.disabled || this.context.disabled}
        type={this.props.htmlType}
        data-click-animating={this.state.clickAnimating ? '' : undefined}
      >
        {this.props.icon ? <Icon type={this.props.icon} /> : ''}
        {this.props.children ? <span>{this.props.children}</span> : ''}
        {this.props.iconRight ? <Icon type={this.props.iconRight} /> : ''}
      </ button>)
  }
}
interface IGroupProps {
  size?: IProps['size']
  type?: IProps['type']
  shape?: IProps['shape']
  disabled?: boolean
  className?: string
}
namespace Button {
  export class Group extends React.Component<IGroupProps> {
    static displayName = 'Button.Group'
    private classes() {
      const classes = [styled['button-group']]
      this.props.className && classes.unshift(this.props.className)
      return classes.join(' ')
    }
    render() {
      const { type, size, shape, disabled } = this.props
      const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
      if (children.some((e: JSX.Element) => e.type !== (<Button />).type)) {
        console.warn("ButtonGroup has a child which isn't a Button component")
      }
      return (
        <ButtonGroupContext.Provider value={{ size, type, shape, disabled }}>
          <div className={this.classes()}>{this.props.children}</div>
        </ButtonGroupContext.Provider>
      )
    }
  }
}
export default Button