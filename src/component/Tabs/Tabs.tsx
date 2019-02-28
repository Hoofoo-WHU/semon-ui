import * as React from 'react'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import styled from '@/style/component/Tabs/Tabs.scss'
import Context from './TabsContext'
import Nav from './Nav'
import Tab from './Tab'
import Content from './Content'
import Panel from './Panel'
import { childrenOfType } from 'airbnb-prop-types'
import { tuple } from '../../until/type'

type TabsNav = typeof Nav
type TabsTab = typeof Tab
type TabsContent = typeof Content
type TabsPanel = typeof Panel

const TabPosition = tuple('top', 'left', 'right', 'bottom')
type TabPosition = typeof TabPosition[number]

class Tabs extends React.Component<Tabs.Props>{
  static displayName = 'Tabs'
  static Nav: TabsNav
  static Tab: TabsTab
  static Content: TabsContent
  static Panel: TabsPanel
  static defaultProps: Tabs.Props = {
    activeName: '',
    tabPosition: 'top'
  }
  static propTypes: PropTypes.ValidationMap<Tabs.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    activeName: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    children: childrenOfType(Nav, Content).isRequired
  }

  private change(name: string) {
    this.props.onChange && this.props.onChange(name)
  }

  private renderChildren() {
    return React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, { __PARENT__: true })
    })
  }

  render() {
    const change = this.change.bind(this)
    const { className, style, activeName, tabPosition } = this.props
    const classes = classMerge(
      className,
      styled.tabs,
      styled[`position-${tabPosition}`]
    )
    return (
      <Context.Provider value={{ change, activeName, tabPosition }}>
        <div className={classes} style={style}>{this.renderChildren()}</div>
      </Context.Provider>
    )
  }
}

namespace Tabs {
  export interface Props extends React.Props<{}> {
    activeName: string
    tabPosition?: TabPosition
    onChange?: (name: string) => void
    className?: string
    style?: React.CSSProperties
  }
}

export default Tabs