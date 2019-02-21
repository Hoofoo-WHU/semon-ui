import * as React from 'react'
import SVG, { types as iconTypes } from './SVG'
import styled from '@/style/component/Icon.scss'

interface IProps {
  className?: string
  style?: React.CSSProperties
  type: iconTypes
}

class Icon extends React.Component<IProps> {
  render() {
    const SvgIcon = SVG[this.props.type]
    const classes = []
    this.props.className && classes.push(this.props.className)
    classes.push(styled.icon)
    return (
      <SvgIcon className={classes.join(' ')} style={this.props.style} viewBox='64 64 896 896'></SvgIcon>
    )
  }
}
namespace Icon {
  export type types = iconTypes
}
export default Icon