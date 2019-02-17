import * as React from 'react'

interface IProps {
  width?: number | string,
  height?: number | string
}

class Icon extends React.Component<IProps> {
  render() {
    return (
      <i>
        1
      </i>
    )
  }
}

export default Icon