import * as React from 'react'
import SemonPropTypes from '../../until/semon-prop-types'
import * as PropTypes from 'prop-types'
import classMerge from '../../until/class-merge'
import styled from '@/style/component/Tabs/Panel.scss'
import TabsContext, { ITabsContext } from './TabsContext'

class Panel extends React.Component<Panel.Props>{
  static displayName = 'Tabs.Panel'
  static propTypes: PropTypes.ValidationMap<Panel.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    name: PropTypes.string
  }
  static contextType = TabsContext

  private ref = React.createRef<HTMLDivElement>()
  readonly context: ITabsContext

  private checkParent() {
    if (!this.props['__PARENT__']) {
      console.warn('Tabs.Panel只能作为Tabs.Content的children来使用!')
    }
  }

  private getSelected() {
    return this.context.activeName === this.props.name
  }

  private activeContent() {
    this.getSelected() && this.props['__ON_ACTIVE__'](this.ref.current)
  }

  componentWillMount() {
    this.checkParent()
  }

  componentDidMount() {
    this.activeContent()
  }

  componentDidUpdate() {
    this.activeContent()
  }

  render() {
    const { className, style, children } = this.props
    const classes = classMerge(
      className,
      styled['tabs-panel']
    )
    return (
      <div role='tabpanel' className={classes} style={style} ref={this.ref}>{children}</div>
    )
  }
}

namespace Panel {
  export interface Props extends React.Props<{}> {
    name: string
    className?: string
    style?: React.CSSProperties
  }
}

export default Panel