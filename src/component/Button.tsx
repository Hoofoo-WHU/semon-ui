import * as React from 'react'
import styled from '@/style/component/Button.scss'

export interface Props {
  size?: 'small' | 'large',
  onClick?: React.MouseEventHandler
}

export default class extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  private classes() {
    const classes = [styled['s-button']]
    if (this.props.size) {
      classes.push(styled[this.props.size])
    }
    return classes.join(' ')
  }
  onClick(e: React.MouseEvent) {
    this.props.onClick && this.props.onClick(e)
  }
  render() {
    return (
      <button
        className={this.classes()}
        onClick={this.onClick.bind(this)}>
        {this.props.children}
      </ button>)
  }
}