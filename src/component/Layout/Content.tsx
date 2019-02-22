import * as React from 'react'
import styled from '@/style/component/Layout/Content.scss'

export interface IContentProps {
  className?: string,
  style?: React.CSSProperties
}

class Content extends React.Component<IContentProps> {
  static displayName = 'Content'

  private classes() {
    const { className } = this.props
    const classes = []
    className && classes.push(className)
    classes.push(styled['layout-content'])
    return classes.join(' ')
  }
  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Content组件的父组件不是Layout！`)
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

export default Content