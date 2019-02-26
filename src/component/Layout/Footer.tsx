import * as React from 'react'
import styled from '@/style/component/Layout/Footer.scss'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'

class Footer extends React.Component<Footer.Props> {
  static displayName = 'Footer'
  static propTypes: PropTypes.ValidationMap<Footer.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style
  }

  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Footer组件的父组件不是Layout！`)
  }

  componentWillMount() {
    this.parentValidate()
  }

  render() {
    const { className, style } = this.props
    const classes = classMerge(
      className,
      styled['layout-footer']
    )
    return (
      <div className={classes} style={style}>{this.props.children}</div>
    )
  }
}

namespace Footer {
  export interface Props extends React.Props<{}> {
    className?: string,
    style?: React.CSSProperties
  }
}

export default Footer