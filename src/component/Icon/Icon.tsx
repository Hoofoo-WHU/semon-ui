import * as React from 'react'
import SVG, { types as iconTypes } from './SVG'
import styled from '@/style/component/Icon.scss'

interface IProps {
  style?: React.CSSProperties
  type: iconTypes
}

class Icon extends React.Component<IProps> {
  render() {
    const SvgIcon = SVG[this.props.type]
    return (
      <SvgIcon className={styled.icon} style={this.props.style} viewBox='64 64 896 896'></SvgIcon>
    )
  }
}
namespace Icon {
  export type types = iconTypes
}
export default Icon