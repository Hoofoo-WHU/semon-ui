import * as React from 'react'
import SemonPropTypes from '../../until/semon-prop-types'
import * as PropTypes from 'prop-types'
import classMerge from '../../until/class-merge'
import styled from '@/style/component/Tabs/Content.scss'
import Panel from './Panel'
import { childrenOfType } from 'airbnb-prop-types'
import TabsContext, { ITabsContext } from './TabsContext'

interface State {
  transform: string
  current: HTMLDivElement,
  animate: boolean
}


class Content extends React.Component<Content.Props, State>{
  static displayName = 'Tabs.Content'
  static propTypes: PropTypes.ValidationMap<Content.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    children: childrenOfType(Panel)
  }
  static contextType = TabsContext

  readonly context: ITabsContext
  readonly state = {
    transform: undefined,
    current: undefined,
    animate: false
  }

  private checkParent() {
    if (!this.props['__PARENT__']) {
      console.warn('Tabs.Content只能作为Tabs的children来使用!')
    }
  }

  componentWillMount() {
    this.checkParent()
  }

  private onChange(e: HTMLDivElement) {
    if (this.state.current === undefined || this.state.current !== e) {
      this.updateTransform(e)
    }
  }

  private updateTransform(e: HTMLDivElement) {
    let transform = `translate3d(-${e.offsetLeft / e.offsetWidth * 100}%,0,0)`
    if (this.context.tabPosition === 'left' || this.context.tabPosition === 'right') {
      transform = `translate3d(0,-${e.offsetTop / e.offsetHeight * 100}%,0)`
    }
    this.setState({
      transform,
      current: e,
      animate: true
    })
    if (this.state.current === undefined || this.shouldTransformUpdate) {
      this.setState({
        animate: false
      })
    }
  }

  private renderChildren() {
    let childrenNames = React.Children.map(this.props.children, (v: any) => v.props.name)
    if (childrenNames && childrenNames.length !== new Set(childrenNames).size) {
      throw new Error('Tabs.Panel的name必须唯一！')
    }
    return React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, { __PARENT__: true, __ON_ACTIVE__: this.onChange.bind(this) })
    })
  }

  private shouldTransformUpdate = false

  componentWillReceiveProps(props, context: ITabsContext) {
    if (context.tabPosition !== this.context.tabPosition) {
      this.shouldTransformUpdate = true
    }
  }

  componentDidUpdate() {
    if (this.shouldTransformUpdate) {
      this.updateTransform(this.state.current)
      this.shouldTransformUpdate = false
    }
  }

  render() {
    const { className, style } = this.props
    const classes = classMerge(
      className,
      styled['tabs-content'],
      styled[this.context.tabPosition],
      this.state.animate && styled.animate
    )

    return (
      <div className={classes} style={{ transform: this.state.transform, ...style }}>{this.renderChildren()}</div>
    )
  }
}

namespace Content {
  export interface Props extends React.Props<{}> {
    className?: string
    style?: React.CSSProperties
  }
}

export default Content