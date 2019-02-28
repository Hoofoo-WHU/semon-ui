import * as React from 'react'
import SemonPropTypes from '../../until/semon-prop-types'
import * as PropTypes from 'prop-types'
import classMerge from '../../until/class-merge'
import styled from '@/style/component/Tabs/Content.scss'
import Panel from './Panel'
import { childrenOfType } from 'airbnb-prop-types'

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
      this.setState({
        transform: `translate3d(-${e.offsetLeft}px,0,0)`,
        current: e,
        animate: true
      })
    }
    if (this.state.current === undefined) {
      this.setState({
        animate: false
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
      styled['tabs-content'],
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