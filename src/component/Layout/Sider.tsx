import * as React from 'react'
import styled from '@/style/component/Layout/Sider.scss'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'

class Sider extends React.Component<Sider.Props> {
  static displayName = 'Sidebar'
  static propTypes: PropTypes.ValidationMap<Sider.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style
  }

  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Sider组件的父组件不是Layout！`)
  }

  componentWillMount() {
    this.parentValidate()
  }

  render() {
    const { className, style } = this.props
    const classes = classMerge(
      className,
      styled['layout-sider']
    )
    return <div className={classes} style={style}>{this.props.children}</div>
  }
}

namespace Sider {
  export interface Props extends React.Props<{}> {
    className?: string,
    style?: React.CSSProperties
  }
}

export default Sider