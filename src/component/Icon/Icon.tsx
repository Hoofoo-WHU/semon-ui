import * as React from 'react'
import SVG, { IconType } from './SVG'
import styled from '@/style/component/Icon.scss'
import * as PropTypes from 'prop-types'
import * as AirbnbPropTypes from 'airbnb-prop-types'
import classMerge from '../../until/class-merge'

export interface IProps extends React.Props<{}> {
  className?: string
  style?: React.CSSProperties
  type: IconType
  spin?: boolean
  children?: undefined | null
}

class Icon extends React.Component<IProps> {
  static displayName = 'Icon'
  static propsType = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(IconType),
    children: AirbnbPropTypes.explicitNull
  }
  render() {
    const { className, style, type, spin } = this.props
    const SvgIcon = SVG[type]
    const classes = classMerge(className, styled.icon, spin && styled.spin)
    return (
      <SvgIcon className={classes} style={style} viewBox='64 64 896 896'></SvgIcon>
    )
  }
}

namespace Icon {
  export type Type = IconType
  export const Type = IconType
}

export default Icon
