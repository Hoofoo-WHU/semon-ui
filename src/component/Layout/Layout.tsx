import * as React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sider from './Sider'
import styled from '@/style/component/Layout/Layout.scss'

export interface ILayoutProps {
  className?: string
  hasSider?: boolean
  style?: React.CSSProperties
}

class Layout extends React.Component<ILayoutProps> {
  static displayName = 'Layout'
  static Content = Content
  static Footer = Footer
  static Header = Header
  static Sider = Sider

  private hasSider() {
    if (this.props.hasSider) {
      return true
    }
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
    return children.some((e: JSX.Element) => {
      if (!e) {
        return false
      }
      return e.type === (<Sider />).type
    })
  }
  private childrenValidate() {
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
    return children.every((e: React.ReactElement<{}>) => {
      if (!e) {
        return true
      }
      return e.type === (<Sider />).type
        || e.type === (<Footer />).type
        || e.type === (<Content />).type
        || e.type === (<Layout />).type
        || e.type === (<Header />).type
    })
  }
  componentDidMount() {
    this.childrenValidate()
      || console.warn(`Layout组件中包含了非Layout、Header、Content、Footer、Sidebar组件！`)
  }
  renderChildren() {
    return React.Children.map(this.props.children, (e: any) => {
      // 为合法子组件添加Parent标识
      if (e.type === (<Sider />).type
        || e.type === (<Footer />).type
        || e.type === (<Content />).type
        || e.type === (<Layout />).type
        || e.type === (<Header />).type) {
        return React.cloneElement(e, {
          __PARENT__: true
        })
      }
      return e
    })
  }
  private classes() {
    const { className } = this.props
    const classes = []
    className && classes.push(className)
    classes.push(styled.layout)
    this.hasSider() && classes.push(styled['has-sider'])
    return classes.join(' ')
  }

  render() {
    return (
      <div className={this.classes()} style={this.props.style}>{this.renderChildren()}</div>
    )
  }
}

export default Layout
