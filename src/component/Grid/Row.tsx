import * as React from 'react'
import * as enquire from 'enquire.js'
import styled from '@/style/component/Row.scss'
import RowContext from './RowContext'

interface IRes {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  default: number
}
export interface IRowProps {
  className?: string
  justify?: 'start' | 'end' | 'space-between' | 'space-around' | 'center'
  align?: 'top' | 'middle' | 'bottom'
  gutter?: number | IRes
}

const responsiveArray = ['xl', 'lg', 'md', 'sm', 'xs']
const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)'
}
interface IRowState {
  screen: object
}
class Row extends React.Component<IRowProps, IRowState>{
  static displayName = 'Row'
  readonly state = {
    screen: {}
  }
  private classes() {
    const classes = []
    this.props.className && classes.push(this.props.className)
    classes.push(styled.row)
    classes.push(styled[`justify-${this.props.justify || 'start'}`])
    classes.push(styled[`align-${this.props.align || 'top'}`])
    return classes.join(' ')
  }
  private getGutter() {
    if (typeof this.props.gutter !== 'object') {
      return this.props.gutter
    }
    let gutter = this.props.gutter.default
    responsiveArray.some(v => {
      this.props.gutter[v] && (gutter = this.props.gutter[v])
      return this.state.screen[v]
    })
    return gutter
  }
  private style(): React.CSSProperties {
    const gutter = this.getGutter()
    return {
      marginLeft: gutter ? -gutter / 2 : undefined,
      marginRight: gutter ? -gutter / 2 : undefined
    }
  }
  componentDidMount() {
    Reflect.ownKeys(responsiveMap).forEach(v => {
      enquire.register(responsiveMap[v], {
        match: () => {
          if (typeof this.props.gutter !== 'object') {
            return
          }
          this.setState(prevState => ({
            screen: {
              ...prevState.screen,
              [v]: true,
            }
          }))
        },
        unmatch: () => {
          if (typeof this.props.gutter !== 'object') {
            return
          }
          this.setState(prevState => ({
            screen: {
              ...prevState.screen,
              [v]: false,
            }
          }))
        },
        destroy() { }
      })
    })
  }
  componentWillUnmount() {
    Object.keys(responsiveMap).forEach(v =>
      enquire.unregister(responsiveMap[v])
    )
  }
  render() {
    return (
      <RowContext.Provider value={{ gutter: this.getGutter() }}>
        <div className={this.classes()} style={this.style()}>
          {this.props.children}
        </div>
      </RowContext.Provider>
    )
  }
}

export default Row