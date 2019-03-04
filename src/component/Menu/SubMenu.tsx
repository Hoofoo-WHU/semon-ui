import * as React from 'react'
import classMerge from '@/until/class-merge'
import styledMenu from '@/style/component/Menu/Menu.scss'
import styled from '@/style/component/Menu/SubMenu.scss'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import Item from './Item'
import Context, { IMenuContext } from './Context'

type MenuItem = typeof Item

interface State {
  animating: boolean,
  active: boolean
}

class SubMenu extends React.Component<SubMenu.Props, State>{
  static displayName = 'Menu.SubMenu'
  static Item: MenuItem
  static contextType = Context
  static propTypes: React.ValidationMap<SubMenu.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    name: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    disabled: PropTypes.bool
  }

  private menu = React.createRef<HTMLUListElement>()

  readonly context: IMenuContext

  readonly state: State = {
    animating: false,
    active: false
  }

  private onChange(name: string) {
    const { onChange } = this.context
    onChange && onChange(name)
  }

  private isOpen() {
    return this.context.opens.includes(this.props.name)
  }

  private getHeight() {
    if (this.isOpen() && !this.state.active) {
      setTimeout(() => {
        this.setState({ active: true })
      }, 300)
      return this.menu.current.offsetHeight + this.menu.current.offsetTop
    }
    if (!this.isOpen() && this.state.active) {
      setTimeout(() => {
        this.setState({ active: false })
      }, 0)
      return this.menu.current.offsetHeight + this.menu.current.offsetTop
    }
  }

  private onOpenChange(opens?: string[]) {
    if (!this.props.disabled) {
      const { onOpenChange } = this.context
      if (opens) {
        opens.push(this.props.name)
        onOpenChange && onOpenChange(opens)
      } else {
        let opens = this.isOpen() ? [] : [this.props.name]
        onOpenChange && onOpenChange(opens)
      }
    }
  }

  private firstRender = true
  render() {
    if (this.firstRender) {
      if (this.isOpen()) {
        this.state.active = true
      }
      this.firstRender = false
    }
    const { activeName, level, opens } = this.context
    const { className, style, children, title, disabled } = this.props
    const classes = classMerge(
      className,
      styled['menu-submenu'],
      this.state.active ? styled.active : undefined,
      disabled && styled.disabled
    )
    return (
      <Context.Provider value={{ activeName, level: level + 1, opens, onChange: this.onChange.bind(this), onOpenChange: this.onOpenChange.bind(this) }}>
        <li role='submenu' className={classes} style={{ ...style, height: this.getHeight() }}>
          <div className={styled.title} style={{ paddingLeft: level * 36 }} onClick={() => this.onOpenChange()}>
            {title}
            <i className={classMerge(styled.arrow, this.isOpen() && styled.active)}></i>
          </div>
          <ul ref={this.menu} className={styledMenu.menu}>
            {children}
          </ul>
        </li>
      </Context.Provider>
    )
  }
}

namespace SubMenu {
  export interface Props extends React.Props<{}> {
    name: string
    title: React.ReactNode
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
  }
}

export default SubMenu