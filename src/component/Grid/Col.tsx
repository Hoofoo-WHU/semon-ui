import * as React from 'react'
import styled from '@/style/component/Col.scss'
import RowContext, { IRowContext } from './RowContext';

type GridNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24'
interface IRes {
  span?: GridNumber
  offset?: GridNumber
  order?: GridNumber
}
export interface IColProps {
  span: GridNumber
  className?: string
  offset?: GridNumber
  order?: GridNumber
  xs?: IRes | GridNumber
  sm?: IRes | GridNumber
  md?: IRes | GridNumber
  lg?: IRes | GridNumber
  xl?: IRes | GridNumber
}
interface IColState {
}
class Col extends React.Component<IColProps, IColState> {
  static contextType = RowContext
  readonly context: IRowContext
  private classes() {
    function push(size: IRes | GridNumber, sizeName?: string) {
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
  render() {
    return (
      <div className={this.classes()} style={this.style()}>
        {this.props.children}
      </div>
    )
  }
}

export default Col