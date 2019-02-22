import * as React from 'react'
import styled from '@/style/component/Layout/Footer.scss'

export interface IFooterProps {
  className?: string
  style?: React.CSSProperties
}

class Footer extends React.Component<IFooterProps> {
  static displayName = 'Footer'
  classes() {
    const { className } = this.props
    const classes = []
    className && classes.push(className)
    classes.push(styled['layout-footer'])
    return classes.join(' ')
  }
  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Footer组件的父组件不是Layout！`)
  }
  componentWillMount() {
    this.parentValidate()
  }
  render() {
    return (
      <div className={this.classes()} style={this.props.style}>{this.props.children}</div>
    )
  }
}

export default Footer