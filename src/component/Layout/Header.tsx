import * as React from 'react'
import styled from '@/style/component/Layout/Header.scss'

export interface IHeaderProps {
  className?: string
  style?: React.CSSProperties
}

class Header extends React.Component<IHeaderProps> {
  static displayName = 'Header'

  classes() {
    const { className } = this.props
    const classes = []
    className && classes.push(className)
    classes.push(styled['layout-header'])
    return classes.join(' ')
  }
  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Header组件的父组件不是Layout！`)
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

export default Header