import * as React from 'react'
import styled from '@/style/component/Layout/Header.scss'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'

class Header extends React.Component<Header.Props> {
  static displayName = 'Header'
  static propTypes: PropTypes.ValidationMap<Header.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style
  }

  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Header组件的父组件不是Layout！`)
  }

  componentWillMount() {
    this.parentValidate()
  }

  render() {
    const { className, style, children } = this.props
    const classes = classMerge(
      className,
      styled['layout-header']
    )
    return (
      <div className={classes} style={style}>{children}</div>
    )
  }
}

namespace Header {
  export interface Props extends React.Props<{}> {
    className?: string,
    style?: React.CSSProperties
  }
}

export default Header