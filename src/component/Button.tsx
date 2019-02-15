import * as React from 'react'
import styled from '@/style/component/Button.scss'

interface IProps {
  size?: 'small' | 'large',
  type?: 'primary' | 'dashed' | 'danger',
  disabled?: boolean,
  htmlType?: string,
  onClick?: React.MouseEventHandler
}

class Button extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  private classes() {
    const classes = [styled['button']]
    this.props.size && classes.push(styled[this.props.size])
    this.props.type && classes.push(styled[this.props.type])
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
        {this.props.children}
      </ button>)
  }
}
interface IGroupProps {
  size?: IProps['size']
}
namespace Button {
  export class Group extends React.Component<IGroupProps> {
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