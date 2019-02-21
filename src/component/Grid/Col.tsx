import * as React from 'react'
import styled from '@/style/component/Col.scss'
import RowContext, { IRowContext } from './RowContext';

type GridNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24'
export interface IColProps {
  className?: string
  span: GridNumber
}
class Col extends React.Component<IColProps> {
  static contextType = RowContext
  context: IRowContext
  private classes() {
    const classes = []
    this.props.className && classes.push(this.props.className)
    classes.push(styled.col)
    classes.push(styled[`span-${this.props.span}`])
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