import * as React from 'react'

export interface IRowContext {
  gutter?: number
}

const RowContext = React.createContext<IRowContext>({})

export default RowContext