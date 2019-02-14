import * as React from 'react'
import * as ReactDom from 'react-dom'
import Button from '@/component/Button'

import '@/style/app.scss'

class App extends React.Component<any, { disabled: boolean, type?: "primary" | "dashed" | "danger" }> {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }
  disabled() {
    this.setState((state) => {
      return {
        disabled: !state.disabled
      }
    })
  }
  default() {
    this.setState({ type: undefined })
  }
  primary() {
    this.setState({ type: 'primary' })
  }
  danger() {
    this.setState({ type: 'danger' })
  }
  dashed() {
    this.setState({ type: 'dashed' })
  }

  render() {
    return <div>
      <h1>Button</h1>
      <Button onClick={this.disabled.bind(this)}>Disabled</Button>
      <Button onClick={this.default.bind(this)}>Default</Button>
      <Button onClick={this.primary.bind(this)}>Primary</Button>
      <Button onClick={this.danger.bind(this)}>Danger</Button>
      <Button onClick={this.dashed.bind(this)}>Dashed</Button>
      <br />
      <h2>Sample:</h2>
      <Button size='small' disabled={this.state.disabled} type={this.state.type}>
        Small
      </Button>
      <Button disabled={this.state.disabled} type={this.state.type}>
        Default
      </Button>
      <Button size='large' disabled={this.state.disabled} type={this.state.type} htmlType='submit'>
        Large
      </Button>
    </div>
  }
}
ReactDom.render(<App />, document.getElementById('app'))