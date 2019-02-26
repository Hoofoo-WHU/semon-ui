import * as React from 'react'
import SVG, { IconType } from './SVG'
import styled from '@/style/component/Icon.scss'
import * as PropTypes from 'prop-types'
import * as AirbnbPropTypes from 'airbnb-prop-types'
import classMerge from '../../until/class-merge'

class Icon extends React.Component<Icon.Props> {
  static displayName = 'Icon'
  static propsType: PropTypes.ValidationMap<Icon.Props> = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(IconType).isRequired,
    spin: PropTypes.bool,
    children: AirbnbPropTypes.explicitNull()
  }
  render() {
    const { className, style, type, spin } = this.props
    const SvgIcon = SVG[type]
    const classes = classMerge(className, styled.icon, spin && styled.spin)
    return (
      <SvgIcon className={classes} style={style} data-type={type} viewBox='64 64 896 896'></SvgIcon>
    )
  }
}

namespace Icon {
  export const Type = IconType
  export interface Props extends React.Props<{}> {
    className?: string
    style?: React.CSSProperties
    type: IconType
    spin?: boolean
    children?: undefined | null
  }
}

export default Icon
