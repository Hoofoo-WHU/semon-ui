import * as React from 'react'

export interface ITabsContext {
  change: (name: string, e?: MouseEvent) => void
  activeName: string
}

const TabsContext = React.createContext<ITabsContext>({ change: null, activeName: undefined })

export default TabsContext