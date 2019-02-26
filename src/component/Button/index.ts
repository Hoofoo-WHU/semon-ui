import Button from './Button'
import ButtonGroup from './ButtonGroup'

// 必须在此赋值，否则会先引入ButtonGroup类，ButtonGroup类对Button类有引用，但是Button类还没有声明
Button.Group = ButtonGroup

export default Button