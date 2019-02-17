import * as React from 'react'
import SVG, { types } from './SVG'
import styled from '@/style/component/Icon.scss'

interface IProps {
  style?: React.CSSProperties
  type: types
}

class Icon extends React.Component<IProps> {
  render() {
    const SvgIcon = SVG[this.props.type]
    return (
      <SvgIcon className={styled.icon} style={this.props.style}></SvgIcon>
    )
  }
}

export default Icon