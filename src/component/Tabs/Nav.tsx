import * as React from 'react'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import styled from '@/style/component/Tabs/Nav.scss'
import { childrenOfType } from 'airbnb-prop-types'
import Tab from './Tab'
import TabsContext, { ITabsContext } from './TabsContext'

interface State {
  inkWidth: number
  inkHeight: number
  inkTransform: string
  current: HTMLDivElement
}

class Nav extends React.Component<Nav.Props, State>{
  static displayName = 'Tabs.Nav'
  static contextType = TabsContext
  static propTypes: PropTypes.ValidationMap<Nav.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    children: childrenOfType(Tab)
  }
  readonly context: ITabsContext
  readonly state = {
    inkWidth: 0,
    inkHeight: 0,
    inkTransform: undefined,
    current: undefined
  }
  private shouldInkUpdate: boolean = false

  private checkParent() {
    if (!this.props['__PARENT__']) {
      console.warn('Tabs.Nav只能作为Tabs的children来使用!')
    }
  }

  componentWillMount() {
    this.checkParent()
  }


  private onChange(e: HTMLDivElement) {
    if (this.state.current === undefined || this.state.current !== e) {
      this.updateInk(e)
    }
  }

  private updateInk(e: HTMLDivElement) {
    let inkTransform = `translate3d(${e.offsetLeft}px,0,0)`
    let inkWidth = e.offsetWidth
    let inkHeight = e.offsetHeight
    if (this.context.tabPosition === 'left' || this.context.tabPosition === 'right') {
      inkTransform = `translate3d(0,${e.offsetTop}px,0)`
      inkWidth = 2
    } else {
      inkHeight = 2
    }
    this.setState({
      inkTransform,
      inkWidth,
      inkHeight,
      current: e
    })
  }

  componentWillReceiveProps(props, context: ITabsContext) {
    if (context.tabPosition !== this.context.tabPosition) {
      this.state.inkTransform = false
      this.shouldInkUpdate = true
    }
  }

  componentDidUpdate() {
    if (this.shouldInkUpdate) {
      this.updateInk(this.state.current)
      this.shouldInkUpdate = false
    }
  }

  private renderChildren() {
    return React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, { __PARENT__: true, __ON_ACTIVE__: this.onChange.bind(this) })
    })
  }

  render() {
    const { className, style } = this.props
    const classes = classMerge(
      className,
      styled['tabs-nav'],
      styled[this.context.tabPosition]
    )
    return (
      <div className={classes} style={style}>
        {this.renderChildren()}
        {
          this.state.inkTransform ?
            <div className={styled['ink-bar']} style={{
              transform: this.state.inkTransform,
              width: this.state.inkWidth,
              height: this.state.inkHeight,
              ...style
            }} />
            : null
        }
      </div>
    )
  }
}

namespace Nav {
  export interface Props extends React.Props<{}> {
    className?: string
    style?: React.CSSProperties
  }
}

export default Nav