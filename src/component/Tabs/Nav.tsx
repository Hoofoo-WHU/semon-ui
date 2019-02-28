import * as React from 'react'
import classMerge from '../../until/class-merge'
import * as PropTypes from 'prop-types'
import SemonPropTypes from '../../until/semon-prop-types'
import styled from '@/style/component/Tabs/Nav.scss'
import { childrenOfType } from 'airbnb-prop-types'
import Tab from './Tab'

interface State {
  inkWidth: number
  inkTransform: string
  current: HTMLDivElement
}

class Nav extends React.Component<Nav.Props, State>{
  static displayName = 'Tabs.Nav'
  static propTypes: PropTypes.ValidationMap<Nav.Props> = {
    className: PropTypes.string,
    style: SemonPropTypes.style,
    children: childrenOfType(Tab)
  }

  readonly state = {
    inkWidth: 0,
    inkTransform: undefined,
    current: undefined
  }

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
      this.setState({
        inkTransform: `translate3d(${e.offsetLeft}px,0,0)`,
        inkWidth: e.offsetWidth,
        current: e
      })
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
      styled['tabs-nav']
    )
    return (
      <div className={classes} style={style}>
        {this.renderChildren()}
        {
          this.state.inkTransform ?
            <div className={styled['ink-bar']} style={{ transform: this.state.inkTransform, width: this.state.inkWidth, ...style }} />
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