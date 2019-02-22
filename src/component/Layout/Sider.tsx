import * as React from 'react'
import styled from '@/style/component/Layout/Sider.scss'

export interface ISideBarProps {
  className?: string
  style?: React.CSSProperties
}

class Sider extends React.Component<ISideBarProps> {
  static displayName = 'Sidebar'

  private classes() {
    const { className } = this.props
    const classes = []
    className && classes.push(className)
    classes.push(styled['layout-sider'])
    return classes.join(' ')
  }
  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Sider组件的父组件不是Layout！`)
  }
  componentWillMount() {
    this.parentValidate()
  }
  render() {
    return <div className={this.classes()} style={this.props.style}>{this.props.children}</div>
  }
}

export default Sider