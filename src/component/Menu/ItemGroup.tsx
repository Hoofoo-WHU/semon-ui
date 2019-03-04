import * as React from 'react'
import classMerge from '@/until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import styled from '@/style/component/Menu/ItemGroup.scss'
import Item from './Item'
import { childrenOfType } from 'airbnb-prop-types'
import Context, { IMenuContext } from './Context'

class ItemGroup extends React.Component<ItemGroup.Props>{
  static displayName = 'Menu.ItemGroup'
  static contextType = Context
  static propTypes: React.ValidationMap<ItemGroup.Props> = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: SemonPropTypes.style,
    children: childrenOfType(Item)
  }

  readonly context: IMenuContext

  render() {
    const { level } = this.context
    const { className, style, children, title } = this.props
    const classes = classMerge(
      className,
      styled['menu-item-group']
    )
    return (
      <div className={classes} style={style}>
        <label style={{ paddingLeft: level * 36 - 18 }}>{title}</label>
        {children}
      </div>
    )
  }
}

namespace ItemGroup {
  export interface Props extends React.Props<{}> {
    title: string
    className?: string
    style?: React.CSSProperties
  }
}

export default ItemGroup