import * as React from 'react'
export interface IMenuContext {
  level: number
  activeName: string
  opens: string[]
  onChange?: (name: string) => void
  onOpenChange?: (opens: string[]) => void
}
const Context = React.createContext<IMenuContext>({ level: 1, activeName: '', opens: [] })

export default Context