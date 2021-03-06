import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Button, Icon, Input, Row, Col, Layout, Message, Tabs, Menu } from './'
import '@/style/app.scss'
import Sider from './component/Layout/Sider';

interface IState {
  disabled: boolean,
  type?: 'primary' | 'dashed' | 'danger',
  value: string,
  activeName: string,
  memuActiveName: string,
  menuOpens: string[],
  tabPostion: Tabs.Props['tabPosition'],
  tabSize: Tabs.Props['size']
}

class App extends React.Component<any, IState> {
  readonly state: IState = {
    disabled: false,
    type: undefined,
    value: '',
    activeName: '2',
    memuActiveName: '1',
    tabPostion: 'top',
    tabSize: 'default',
    menuOpens: ['3']
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
      <h1>Memu</h1>
      <Layout>
        <Sider style={{ width: 260 }}>
          <Menu activeName={this.state.memuActiveName}
            opens={this.state.menuOpens}
            onOpenChange={(opens) => this.setState({ menuOpens: opens })}
            onChange={(name) => this.setState({ memuActiveName: name })}>
            <Menu.Item name='1'><Icon type='user' />Navigation One</Menu.Item>
            <Menu.Item name='2'>Navigation Two</Menu.Item>
            <Menu.SubMenu name='3' title='Navigation Three'>
              <Menu.Item name='o3' disabled>Option 3</Menu.Item>
              <Menu.Item name='o4'>Option 4</Menu.Item>
              <Menu.SubMenu name='s1' title='Submenu'>
                <Menu.Item name='o5'>Option 5</Menu.Item>
                <Menu.Item name='o6'>Option 6</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu name='4' title='Navigation Four'>
              <Menu.ItemGroup title='分类1'>
                <Menu.Item name='o7'>Option 7</Menu.Item>
                <Menu.Item name='o8'>Option 8</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title='分类2'>
                <Menu.Item name='o9'>Option 9</Menu.Item>
                <Menu.Item name='o10'>Option 10</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
          </Menu>
        </Sider>
      </Layout>
      <h1>Tabs</h1>
      <Button.Group style={{ marginBottom: 8 }}>
        <Button onClick={() => this.setState({ tabPostion: 'top' })}>Top</Button>
        <Button onClick={() => this.setState({ tabPostion: 'right' })}>Right</Button>
        <Button onClick={() => this.setState({ tabPostion: 'bottom' })}>Bottom</Button>
        <Button onClick={() => this.setState({ tabPostion: 'left' })}>Left</Button>
      </Button.Group>
      <Button.Group style={{ marginBottom: 8 }}>
        <Button onClick={() => this.setState({ tabSize: 'small' })}>Small</Button>
        <Button onClick={() => this.setState({ tabSize: 'default' })}>Default</Button>
        <Button onClick={() => this.setState({ tabSize: 'large' })}>Large</Button>
      </Button.Group>
      <Row>
        <Col span='12'>
          <Tabs size={this.state.tabSize} tabPosition={this.state.tabPostion} activeName={this.state.activeName} onChange={(name) => { this.setState({ activeName: name }) }}>
            <Tabs.Nav>
              <Tabs.Tab name='1' disabled>用户管理</Tabs.Tab>
              <Tabs.Tab name='2'>配置管理</Tabs.Tab>
              <Tabs.Tab name='3'>角色管理</Tabs.Tab>
              <Tabs.Tab name='4'>定时任务</Tabs.Tab>
            </Tabs.Nav>
            <Tabs.Content>
              <Tabs.Panel name='1'>用户管理</Tabs.Panel>
              <Tabs.Panel name='2'>配置管理</Tabs.Panel>
              <Tabs.Panel name='3'>角色管理</Tabs.Panel>
              <Tabs.Panel name='4'>定时任务</Tabs.Panel>
            </Tabs.Content>
          </Tabs>
        </Col>
      </Row>
      <h1>Message</h1>
      <Button type="primary" onClick={() => Message.success('恭喜你，这是一条成功消息')}>Message</Button>
      <Button type="primary" onClick={() => Message.info('这是一条消息提示')}>Info</Button>
      <Button type="primary" onClick={() => Message.warn('警告哦，这是一条警告消息')}>Warn</Button>
      <Button type="primary" onClick={() => Message.error('错了哦，这是一条错误消息')}>Error</Button>
      <h1>Layout</h1>
      <Layout className="demo-layout" style={{ backgroundColor: 'red' }}>
        <Layout.Header className='demo-header'>Header</Layout.Header>
        <Layout.Content className='demo-content'><div className='content-inner'>Content</div></Layout.Content>
        <Layout.Footer className='demo-footer'>Footer</Layout.Footer>
      </Layout>
      <Layout className="demo-layout">
        <Layout.Header className='demo-header'>Header</Layout.Header>
        <Layout>
          <Layout.Sider className="demo-sider"><div className='sider-inner'>Sider</div></Layout.Sider>
          <Layout.Content className='demo-content'><div className='content-inner'>Content</div></Layout.Content>
        </Layout>
        <Layout.Footer className='demo-footer'>Footer</Layout.Footer>
      </Layout>
      <Layout className="demo-layout">
        <Layout.Header className='demo-header'>Header</Layout.Header>
        <Layout>
          <Layout.Content className='demo-content'><div className='content-inner'>Content</div></Layout.Content>
          <Layout.Sider className="demo-sider"><div className='sider-inner'>Sider</div></Layout.Sider>
        </Layout>
        <Layout.Footer className='demo-footer'>Footer</Layout.Footer>
      </Layout>
      <Layout className="demo-layout">
        <Layout.Sider className="demo-sider"><div className='sider-inner'>Sider</div></Layout.Sider>
        <Layout>
          <Layout.Header className='demo-header'>Header</Layout.Header>
          <Layout.Content className='demo-content'><div className='content-inner'>Content</div></Layout.Content>
          <Layout.Footer className='demo-footer'>Footer</Layout.Footer>
        </Layout>
      </Layout>
      <h1>Grid</h1>
      <h2>span:</h2>
      <Row className="demo-row">
        <Col className='demo-col' span='24'><div>span-24</div></Col>
      </Row>
      <Row className="demo-row">
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
      <Icon type='user'></Icon>
      <Icon type='check-circle-fill'></Icon>
      <Icon type='close-circle-fill'></Icon>
      <Icon type='info-circle-fill'></Icon>
      <Icon type='warning-circle-fill'></Icon>
    </React.Fragment>
  }
}
ReactDom.render(<App />, document.getElementById('app'))