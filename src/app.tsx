import * as React from 'react'
import * as ReactDom from 'react-dom'
import Button from '../dist/Button'

import '@/style/app.scss'

interface IState { disabled: boolean, type?: "primary" | "dashed" | "danger" }

class App extends React.Component<any, IState> {
  readonly state: IState = {
    disabled: false,
    type: undefined
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
      <h2>options:</h2>
      <Button.Group>
        <Button onClick={this.disabled.bind(this)}>Disabled</Button>
        <Button onClick={this.default.bind(this)}>Default</Button>
        <Button onClick={this.primary.bind(this)}>Primary</Button>
        <Button onClick={this.danger.bind(this)}>Danger</Button>
        <Button onClick={this.dashed.bind(this)}>Dashed</Button>
      </Button.Group>
      <h2>single:</h2>
      <Button size='small' disabled={this.state.disabled} type={this.state.type}>
        Small
      </Button>
      <Button disabled={this.state.disabled} type={this.state.type}>
        Default
      </Button>
      <Button size='large' disabled={this.state.disabled} type={this.state.type}>
        Large
      </Button>
      <h2>group:</h2>
      <Button.Group size="small">
        <Button type={this.state.type} disabled={this.state.disabled}>Left</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Middle</Button>
        <Button type={this.state.type} disabled={this.state.disabled} size="small">Right</Button>
      </Button.Group>
      <Button.Group>
        <Button type={this.state.type} disabled={this.state.disabled}>Left</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Middle</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Right</Button>
      </Button.Group>
      <Button.Group size="large">
        <Button type={this.state.type} disabled={this.state.disabled}>Left</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Middle</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Right</Button>
      </Button.Group>
    </div>
  }
}
ReactDom.render(<App />, document.getElementById('app'))