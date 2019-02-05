import * as React from 'react'
import styled from '@/style/component/Button.scss'

export interface Props {
  size?: 'small' | 'large'
}

export default class extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  private style() {
    const classes = [styled['s-button']]
    if (this.props.size) {
      classes.push(styled[this.props.size])
    }
    return classes.join(' ')
  }
  render() {
    return <button className={this.style()}>{this.props.children}</button>
  }
}