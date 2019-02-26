import * as React from 'react'
import styled from '@/style/component/Layout/Content.scss'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'

class Content extends React.Component<Content.Props> {
  static displayName = 'Content'
  static propTypes: PropTypes.ValidationMap<Content.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style
  }

  private parentValidate() {
    this.props['__PARENT__'] || console.warn(`存在Content组件的父组件不是Layout！`)
  }

  componentWillMount() {
    this.parentValidate()
  }

  render() {
    const { className, style } = this.props
    const classes = classMerge(
      className,
      styled['layout-content']
    )
    return (
      <div className={classes} style={style}>{this.props.children}</div>
    )
  }
}

namespace Content {
  export interface Props extends React.Props<{}> {
    className?: string,
    style?: React.CSSProperties
  }
}

export default Content