import * as React from 'react'
import classMerge from '@/until/class-merge'
import styled from '@/style/component/Menu/Item.scss'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import Context, { IMenuContext } from './Context'

class Item extends React.Component<Item.Props>{
  static displayName = 'Menu.Item'
  static contextType = Context
  static propTypes: React.ValidationMap<Item.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  }

  readonly context: IMenuContext

  private clickHandle(e: React.MouseEvent) {
    if (!this.props.disabled) {
      const value = this.context
      const { name, onClick } = this.props
      onClick && onClick(e)
      value.onChange(name)
    }
  }

  render() {
    const value = this.context
    const { className, style, children, name, disabled } = this.props
    const classes = classMerge(
      className,
      styled['menu-item'],
      value.activeName === name && styled.active,
      disabled && styled.disabled
    )
    const levelStyle = { paddingLeft: 36 * value.level, ...style }
    return (
      <li role='menuitem' className={classes} style={levelStyle} onClick={this.clickHandle.bind(this)}>
        {children}
      </li>
    )
  }
}

namespace Item {
  export interface Props extends React.Props<{}> {
    name: string
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler
  }
}

export default Item