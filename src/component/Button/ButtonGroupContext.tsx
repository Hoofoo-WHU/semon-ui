import * as React from 'react'
import Button from './Button'

interface ButtonGroupContext {
  size?: Button.Props['size']
  type?: Button.Props['type']
  shape?: Button.Props['shape']
  disabled?: boolean
}

const ButtonGroupContext = React.createContext<ButtonGroupContext>({})

export default ButtonGroupContext