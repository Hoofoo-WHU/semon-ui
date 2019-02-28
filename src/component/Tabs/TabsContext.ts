import * as React from 'react'
import Tabs from './Tabs'
export interface ITabsContext {
  change: (name: string, e?: MouseEvent) => void
  activeName: string
  tabPosition: Tabs.Props['tabPosition']
}

const TabsContext = React.createContext<ITabsContext>({
  change: null,
  activeName: undefined,
  tabPosition: 'top'
})

export default TabsContext