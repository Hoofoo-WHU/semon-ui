import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button from './Button'
import { childrenOfType } from 'airbnb-prop-types'
import styled from '@/style/component/Button.scss'
import classMerge from '../../until/class-merge'
import ButtonGroupContext from './ButtonGroupContext'
import { ButtonSize, ButtonType, ButtonShape } from './Type'

class Group extends React.Component<Group.Props> {
  static displayName = 'Button.Group'
  static Size = ButtonSize
  static Type = ButtonType
  static Shape = ButtonShape
  static propTypes: object = {
    size: PropTypes.oneOf(ButtonSize),
    type: PropTypes.oneOf(ButtonType),
    shape: PropTypes.oneOf(ButtonShape),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: childrenOfType(Button)
  }
  render() {
    const { type, size, shape, disabled, className, children, style } = this.props
    const classes = classMerge(...[
      className,
      styled['button-group']
    ])
    return (
      <ButtonGroupContext.Provider value={{ size, type, shape, disabled }}>
        <div className={classes} style={style}>{children}</div>
      </ButtonGroupContext.Provider>
    )
  }
}

namespace Group {
  export interface Props extends React.Props<{}> {
    size?: ButtonSize
    type?: ButtonType
    shape?: ButtonShape
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
  }
}

export default Group