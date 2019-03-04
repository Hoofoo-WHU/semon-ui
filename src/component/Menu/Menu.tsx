import * as React from 'react'
import classMerge from '@/until/class-merge'
import styled from '@/style/component/Menu/Menu.scss'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import Item from './Item'
import Context from './Context'
import Sub from './SubMenu'
import Group from './ItemGroup'

type MenuItem = typeof Item
type SubMenu = typeof Sub
type ItemGroup = typeof Group

class Menu extends React.Component<Menu.Props>{
  static displayName = 'Menu'
  static Item: MenuItem
  static SubMenu: SubMenu
  static ItemGroup: ItemGroup
  static propTypes: React.ValidationMap<Menu.Props> = {
    activeName: PropTypes.string.isRequired,
    opens: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    style: SemonPropTypes.style
  }
  static defaultProps = {
    opens: []
  }

  render() {
    const { className, style, children, activeName, opens } = this.props
    const classes = classMerge(
      className,
      styled.menu
    )
    return (
      <Context.Provider value={{
        activeName,
        level: 1,
        opens,
        onChange: (name: string) => { this.props.onChange && this.props.onChange(name) },
        onOpenChange: (opens) => { this.props.onOpenChange && this.props.onOpenChange(opens) }
      }}>
        <ul role='menu' className={classes} style={style}>
          {children}
        </ul>
      </Context.Provider>
    )
  }
}

namespace Menu {
  export interface Props extends React.Props<{}> {
    activeName: string
    opens?: string[]
    onChange?: (name: string) => void
    onOpenChange?: (opens: string[]) => void
    className?: string
    style?: React.CSSProperties
  }
}

export default Menu