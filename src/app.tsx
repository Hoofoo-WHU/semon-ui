import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Button, Icon, Input, Row, Col, Layout } from './'
import '@/style/app.scss'

interface IState { disabled: boolean, type?: 'primary' | 'dashed' | 'danger', value: string }

class App extends React.Component<any, IState> {
  readonly state: IState = {
    disabled: false,
    type: undefined,
    value: ''
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
    return <React.Fragment>
      <h1>Layout</h1>
      <Layout>123<Layout.Sidebar></Layout.Sidebar></Layout>
      <h1>Grid</h1>
      <h2>span:</h2>
      <Row className="demo-row" gutter={{ md: 20, default: 40 }}>
        <Col className='demo-col' span='12'><div>span-12</div></Col>
        <Col className='demo-col' span='12'><div>span-12</div></Col>
      </Row>
      <Row className="demo-row" gutter={{ md: 40, default: 20 }}>
        <Col className='demo-col' span='12'><div>span-12</div></Col>
        <Col className='demo-col' span='12'><div>span-12</div></Col>
      </Row>
      <Row className="demo-row">
        <Col className='demo-col' span='8'><div>span-8</div></Col>
        <Col className='demo-col' span='8'><div>span-8</div></Col>
        <Col className='demo-col' span='8'><div>span-8</div></Col>
      </Row>
      <Row className="demo-row">
        <Col className='demo-col' span='6'><div>span-6</div></Col>
        <Col className='demo-col' span='6'><div>span-6</div></Col>
        <Col className='demo-col' span='6'><div>span-6</div></Col>
        <Col className='demo-col' span='6'><div>span-6</div></Col>
      </Row>
      <h2>offset:</h2>
      <Row className="demo-row">
        <Col className='demo-col' span='8'><div>span-8</div></Col>
        <Col className='demo-col' span='8' offset='8'><div>span-8 offset-8</div></Col>
      </Row>
      <Row className="demo-row">
        <Col className='demo-col' span='6' offset='6'><div>span-6 offset-6</div></Col>
        <Col className='demo-col' span='6' offset='6'><div>span-6 offset-6</div></Col>
      </Row>
      <Row className="demo-row">
        <Col className='demo-col' span='12' offset='6'><div>span-12 offset-6</div></Col>
      </Row>
      <h2>order:</h2>
      <Row className="demo-row">
        <Col className='demo-col' span='6' order='4'><div>1 order-4</div></Col>
        <Col className='demo-col' span='6' order='3'><div>2 order-3</div></Col>
        <Col className='demo-col' span='6' order='2'><div>3 order-2</div></Col>
        <Col className='demo-col' span='6' order='1'><div>4 order-1</div></Col>
      </Row>
      <section className='demo-input'>
        <h1>Input</h1>
        <h2>normal:</h2>
        <Input size='small' placeholder='small size' />
        <Input
          placeholder='default size'
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
        />
        <Input
          size='large' placeholder='large size'
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
        />
        <h2>prefix:</h2>
        <Input
          placeholder='enter your username'
          prefix={<Icon type='user' style={{ color: 'grey' }} />}
        />
      </section>
      <h1>Button</h1>
      <h2>options:</h2>
      <Button onClick={this.disabled.bind(this)} size='small'>{this.state.disabled ? 'Enable' : 'Disable'}</Button>
      <Button.Group size='small'>
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
      <h2>round:</h2>
      <Button icon="search" type={this.state.type} disabled={this.state.disabled}>Search</Button>
      <Button icon="search" shape='round' type={this.state.type} disabled={this.state.disabled}>Search</Button>
      <Button icon="search" shape='circle' type={this.state.type} disabled={this.state.disabled}></Button>
      <h2>group:</h2>
      <Button.Group type={this.state.type} disabled={this.state.disabled} size='small'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </Button.Group>
      <Button.Group type={this.state.type} disabled={this.state.disabled}>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </Button.Group>
      <Button.Group type={this.state.type} disabled={this.state.disabled} size='large'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </Button.Group>
      <Button.Group type={this.state.type} disabled={this.state.disabled} >
        <Button icon='left'></Button>
        <Button icon='search'></Button>
        <Button icon='right'></Button>
      </Button.Group>
      <Button.Group type={this.state.type} disabled={this.state.disabled} shape='circle'>
        <Button icon='left'></Button>
        <Button icon='search'></Button>
        <Button icon='right'></Button>
      </Button.Group>
      <h1>Icon</h1>
      <Icon type='left'></Icon>
      <Icon type='search'></Icon>
      <Icon type='right'></Icon>
    </React.Fragment>
  }
}
ReactDom.render(<App />, document.getElementById('app'))