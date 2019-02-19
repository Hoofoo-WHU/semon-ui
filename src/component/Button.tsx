import * as React from 'react'
import styled from '@/style/component/Button.scss'

import Icon from '@/component/Icon'

interface IProps {
  size?: 'small' | 'large'
  type?: 'primary' | 'dashed' | 'danger'
  shape?: 'round' | 'circle'
  icon?: Icon.types
  iconRight?: Icon.types
  disabled?: boolean
  htmlType?: string
  onClick?: React.MouseEventHandler
}

class Button extends React.Component<IProps> {
  static displayName = 'Button'
  constructor(props: IProps) {
    super(props)
  }
  private classes() {
    const classes = [styled['button']]
    this.props.size && classes.push(styled[this.props.size])
    this.props.type && classes.push(styled[this.props.type])
    this.props.shape && classes.push(styled[this.props.shape])
    this.props.children || classes.push(styled['icon-only'])
    return classes.join(' ')
  }
  onClick(e: React.MouseEvent) {
    this.props.onClick && this.props.onClick(e)
  }
  render() {
    return (
      <button
        className={this.classes()}
        onClick={this.onClick.bind(this)}
        disabled={this.props.disabled}
        type={this.props.htmlType}
      >
        {this.props.icon ? <Icon type={this.props.icon} /> : ''}
        {this.props.children ? <span>{this.props.children}</span> : ''}
        {this.props.iconRight ? <Icon type={this.props.iconRight} /> : ''}
      </ button>)
  }
}
interface IGroupProps {
  size?: IProps['size']
}
namespace Button {
  export class Group extends React.Component<IGroupProps> {
    static displayName = 'Button.Group'
    private classes() {
      const classes = [styled['button-group']]
      this.props.size && classes.push(styled[this.props.size])
      return classes.join(' ')
    }
    render() {
      const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
      if (children.some((e: JSX.Element) => e.type !== (<Button />).type)) {
        console.warn("ButtonGroup has a child which isn't a Button component")
      }
      return <div className={this.classes()}>{this.props.children}</div>
    }
  }
}
export default Button