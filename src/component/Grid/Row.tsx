import * as React from 'react'
import styled from '@/style/component/Row.scss'
import RowContext from './RowContext'

export interface IRowProps {
  className?: string
  justify?: 'start' | 'end' | 'space-between' | 'space-around' | 'center'
  align?: 'top' | 'middle' | 'bottom'
  gutter?: number
}

class Row extends React.Component<IRowProps>{
  private classes() {
    const classes = []
    this.props.className && classes.push(this.props.className)
    classes.push(styled.row)
    classes.push(styled[`justify-${this.props.justify || 'start'}`])
    classes.push(styled[`align-${this.props.align || 'top'}`])
    return classes.join(' ')
  }
  private style(): React.CSSProperties {
    return {
      marginLeft: this.props.gutter ? -this.props.gutter / 2 : undefined,
      marginRight: this.props.gutter ? -this.props.gutter / 2 : undefined
    }
  }
  render() {
    return (
      <RowContext.Provider value={{ gutter: this.props.gutter }}>
        <div className={this.classes()} style={this.style()}>
          {this.props.children}
        </div>
      </RowContext.Provider>
    )
  }
}

export default Row