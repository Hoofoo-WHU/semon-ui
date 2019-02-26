import * as PropTypes from 'prop-types'
import * as React from 'react'

class SemonPropTypes {
  static style: PropTypes.Requireable<React.CSSProperties> = PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]))
}

export default SemonPropTypes