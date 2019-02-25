import * as React from 'react'
import styled from '@/style/component/Col.scss'
import RowContext, { IRowContext } from './RowContext'
import { tuple } from '../../until/type'
import * as PropTypes from 'prop-types'

const GridSize = tuple('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24')
type GridSize = typeof GridSize[number]

const TypeGridSize = PropTypes.oneOf(GridSize)
const TypeRes = PropTypes.shape({
  span: PropTypes.oneOf(GridSize),
  offset: PropTypes.oneOf(GridSize),
  order: PropTypes.oneOf(GridSize)
})
const propTypes = {
  span: TypeGridSize,
  className: PropTypes.string,
  style: PropTypes.object,
  offset: TypeGridSize,
  order: TypeGridSize,
  xs: PropTypes.oneOfType([
    TypeGridSize,
    TypeRes
  ]),
  sm: PropTypes.oneOfType([
    TypeGridSize,
    TypeRes
  ]),
  md: PropTypes.oneOfType([
    TypeGridSize,
    TypeRes
  ]),
  lg: PropTypes.oneOfType([
    TypeGridSize,
    TypeRes
  ]),
  xl: PropTypes.oneOfType([
    TypeGridSize,
    TypeRes
  ])
}

class Col extends React.Component<Col.Props> {
  static displayName = 'Col'
  static contextType = RowContext
  static defaultProps: Col.Props = {
    span: '24'
  }
  static propTypes = propTypes

  readonly context: IRowContext
  private classes() {
    function push(size: Col.Res | GridSize, sizeName?: string) {
      if (typeof size === 'object') {
        size.span && classes.push(styled[`span-${sizeName ? `${sizeName}-` : ''}${size.span}`])
        size.offset && classes.push(styled[`offset-${sizeName ? `${sizeName}-` : ''}${size.offset}`])
        size.order && classes.push(styled[`order-${sizeName ? `${sizeName}-` : ''}${size.order}`])
      } else {
        size && classes.push(styled[`span-${sizeName ? `${sizeName}-` : ''}${size}`])
      }
    }
    const classes = []
    this.props.className && classes.push(this.props.className)
    classes.push(styled.col)
    push(this.props)
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
    sizes.forEach(name => this.props[name] && push(this.props[name], name))
    return classes.join(' ')
  }
  private style(): React.CSSProperties {
    return {
      paddingLeft: this.context.gutter ? this.context.gutter / 2 : undefined,
      paddingRight: this.context.gutter ? this.context.gutter / 2 : undefined
    }
  }
  private checkParent() {
    if (!this.props['__PARENT__']) {
      console.warn('存在Col不是Row的Child!')
    }
  }
  componentWillMount() {
    this.checkParent()
  }
  render() {
    return (
      <div className={this.classes()} style={this.style()}>
        {this.props.children}
      </div>
    )
  }
}

namespace Col {
  export const Size = GridSize
  export interface Res {
    span?: GridSize
    offset?: GridSize
    order?: GridSize
  }
  export interface Props {
    span?: GridSize
    className?: string
    style?: React.CSSProperties
    offset?: GridSize
    order?: GridSize
    xs?: Res | GridSize
    sm?: Res | GridSize
    md?: Res | GridSize
    lg?: Res | GridSize
    xl?: Res | GridSize
  }
}

export default Col