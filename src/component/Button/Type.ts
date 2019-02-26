import Icon from '../Icon'
import { tuple } from '../../until/type'

const IconType = Icon.Type

const ButtonSize = tuple('small', 'large')
type ButtonSize = typeof ButtonSize[number]

const ButtonType = tuple('primary', 'dashed', 'danger')
type ButtonType = typeof ButtonType[number]

const ButtonShape = tuple('round', 'circle')
type ButtonShape = typeof ButtonShape[number]

const ButtonHtmlType = tuple('submit', 'reset', 'text')
type ButtonHtmlType = typeof ButtonHtmlType[number]

export {
  IconType,
  ButtonSize,
  ButtonType,
  ButtonShape,
  ButtonHtmlType
}