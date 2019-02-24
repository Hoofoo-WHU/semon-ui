import left from './left.svg'
import right from './right.svg'
import search from './search.svg'
import user from './user.svg'
import checkCircleFill from './check-circle-fill.svg'
import closeCircleFill from './close-circle-fill.svg'
import infoCirCleFill from './info-circle-fill.svg'
import warningCircleFill from './warning-circle-fill.svg'

export type IconType = 'left' | 'right' | 'search' | 'user' | 'check-circle-fill' | 'close-circle-fill'
  | 'info-circle-fill' | 'warning-circle-fill'

export default {
  left,
  right,
  search,
  user,
  ['check-circle-fill']: checkCircleFill,
  ['close-circle-fill']: closeCircleFill,
  ['info-circle-fill']: infoCirCleFill,
  ['warning-circle-fill']: warningCircleFill
}