import * as React from 'react'
import styled from '@/style/component/Button.scss'

interface Props {
  size?: 'small' | 'large',
  type?: 'primary' | 'dashed' | 'danger',
  disabled?: boolean,
  htmlType?: string,
  onClick?: React.MouseEventHandler
}

export default class extends React.Component<Props> {
  constructor(props: Props) {
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