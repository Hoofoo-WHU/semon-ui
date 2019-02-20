import * as React from 'react'

interface IProps {
  type?: 'primary' | 'dashed'
}


class Input extends React.Component<IProps> {
  static displayName = 'Input'
  render() {
    return <input className="s-input"></input>
  }
}

export default Input