import * as React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sider from './Sider'
import styled from '@/style/component/Layout/Layout.scss'
import classMerge from '../../until/class-merge'
import SemonPropTypes from '../../until/semon-prop-types'
import * as PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

class Layout extends React.Component<Layout.Props> {
  static displayName = 'Layout'
  static Content = Content
  static Footer = Footer
  static Header = Header
  static Sider = Sider
  static propTypes: PropTypes.ValidationMap<Layout.Props> = {
    className: PropTypes.string,
    hasSider: PropTypes.bool,
    style: SemonPropTypes.style,
    children: childrenOfType(Layout, Content, Header, Footer, Sider)
  }

  private hasSider() {
    if (this.props.hasSider) {
      return true
    }
    return React.Children.toArray(this.props.children).some((e: JSX.Element) => {
      return e.type === (<Sider />).type
    })
  }

  renderChildren() {
    return React.Children.map(this.props.children, (e: any) => {
      // 为合法子组件添加Parent标识
      if (e.type === (<Sider />).type
        || e.type === (<Footer />).type
        || e.type === (<Content />).type
        || e.type === (<Header />).type) {
        return React.cloneElement(e, {
          __PARENT__: true
        })
      }
      return e
    })
  }

  render() {
    const { className, style } = this.props
    const classes = classMerge(
      className,
      styled.layout,
      this.hasSider() && styled['has-sider']
    )
    return (
      <div className={classes} style={style}>{this.renderChildren()}</div>
    )
  }
}

namespace Layout {
  export interface Props extends React.Props<{}> {
    className?: string
    hasSider?: boolean
    style?: React.CSSProperties
  }
}

export default Layout
