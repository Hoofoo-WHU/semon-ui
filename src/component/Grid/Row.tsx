import * as React from 'react'
import * as enquire from 'enquire.js'
import styled from '@/style/component/Row.scss'
import * as PropTypes from 'prop-types'
import * as AirbnbPropTypes from 'airbnb-prop-types'
import classMerge from '../../until/class-merge'
import { tuple } from '../../until/type'
import Col from './Col'
import RowContext from './RowContext'

const RowJustify = tuple('start', 'end', 'space-between', 'space-around', 'center')
type RowJustify = typeof RowJustify[number]

const RowAlign = tuple('top', 'middle', 'bottom')
type RowAlign = typeof RowAlign[number]

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

class Row extends React.Component<Row.Props, IRowState>{
  static displayName = 'Row'

  static propTypes: any = {
    className: PropTypes.string,
    justify: PropTypes.oneOf(RowJustify),
    align: PropTypes.oneOf(RowAlign),
    children: AirbnbPropTypes.childrenOfType(Col),
    gutter: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        default: PropTypes.number.isRequired,
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
      })
    ])
  }

  static defaultProps: Row.Props = {
    justify: 'start',
    align: 'top',
  }

  readonly state = {
    screen: {}
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
    return Object.assign({
      marginLeft: gutter ? -gutter / 2 : undefined,
      marginRight: gutter ? -gutter / 2 : undefined
    }, this.props.style)
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

  renderChildren() {
    return React.Children.map(this.props.children, (child: any) => {
      if (child.type === (<Col />).type) {
        return React.cloneElement(child, { __PARENT__: true })
      }
      return child
    })
  }

  render() {
    const { className, justify, align } = this.props
    const classes = classMerge(
      className,
      styled.row,
      styled[`justify-${justify}`],
      styled[`align-${align}`]
    )
    return (
      <RowContext.Provider value={{ gutter: this.getGutter() }}>
        <div className={classes} style={this.style()}>
          {this.renderChildren()}
        </div>
      </RowContext.Provider>
    )
  }
}

namespace Row {
  export const Justify = RowJustify
  export const Align = RowAlign
  export interface Props extends React.Props<{}> {
    className?: string
    justify?: RowJustify
    align?: RowAlign
    style?: React.CSSProperties
    gutter?: number | {
      xs?: number
      sm?: number
      md?: number
      lg?: number
      xl?: number
      default: number
    }
  }
}

export default Row