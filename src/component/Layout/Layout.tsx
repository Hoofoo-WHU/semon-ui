import * as React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import styled from '@/style/component/Layout/Layout.scss'

export interface ILayoutProps {
  className?: string
  hasSidebar?: boolean
  style?: React.CSSProperties
}

class Layout extends React.Component<ILayoutProps> {
  static displayName = 'Layout'
  static Content = Content
  static Footer = Footer
  static Header = Header
  static Sidebar = Sidebar

  private hasSidebar() {
    if (this.props.hasSidebar) {
      return true
    }
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
    return children.some((e: JSX.Element) => {
      if (!e) {
        return false
      }
      return e.type === (<Sidebar />).type
    })
  }
  private childrenValidate() {
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
    return children.every((e: JSX.Element) => {
      if (!e) {
        return true
      }
      return e.type === (<Sidebar />).type
        || e.type === (<Footer />).type
        || e.type === (<Content />).type
        || e.type === (<Layout />).type
        || e.type === (<Header />).type
    })
  }
  componentDidMount() {
    console.log('hasSideBar:', this.hasSidebar())
    this.childrenValidate()
      || console.warn(`Layout组件中包含了非Layout、Header、Content、Footer、Sidebar组件！`)
  }
  private classes() {
    const { className } = this.props
    const classes = []
    className && classes.push(className)
    classes.push(styled.layout)
    return classes.join(' ')
  }

  render() {
    return (
      <div className={this.classes()} style={this.props.style}></div>
    )
  }
}

export default Layout
