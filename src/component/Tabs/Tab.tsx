import * as React from 'react'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import styled from '@/style/component/Tabs/Tab.scss'
import TabsContext, { ITabsContext } from './TabsContext'

class Tab extends React.Component<Tab.Props> {
  static displayName = 'Tabs.Tab'
  static contextType = TabsContext
  readonly context: ITabsContext
  static propTypes: PropTypes.ValidationMap<Tab.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired
  }

  private ref = React.createRef<HTMLDivElement>()

  private clickHandle(e: MouseEvent) {
    !this.props.disabled
      && !this.getSelected()
      && this.context.change
      && this.context.change(this.props.name, e)
  }

  private getSelected() {
    if (this.context.activeName === this.props.name && this.props.disabled) {
      console.error('无法选择disabled的Tab')
      return false
    }
    return this.context.activeName === this.props.name
  }

  private checkParent() {
    if (!this.props['__PARENT__']) {
      console.warn('Tabs.Tab只能作为Tabs.Nav的children来使用!')
    }
  }

  private activeNav() {
    this.getSelected() && this.props['__ON_ACTIVE__'](this.ref.current)
  }

  componentWillMount() {
    this.checkParent()
  }

  componentDidMount() {
    this.activeNav()
  }

  componentDidUpdate() {
    this.activeNav()
  }

  render() {
    const selected = this.getSelected()
    const { className, style, disabled, children } = this.props
    const classes = classMerge(
      className,
      styled['tabs-tab'],
      disabled && styled.disabled,
      selected && styled.selected
    )
    return (
      <div role='tab' className={classes} style={style} ref={this.ref} onClick={this.clickHandle.bind(this)}>{children}</div>
    )
  }
}

namespace Tab {
  export interface Props extends React.Props<{}> {
    className?: string
    disabled?: boolean
    style?: React.CSSProperties
    name: string
  }
}

export default Tab