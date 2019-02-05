import * as React from 'react'
import * as ReactDom from 'react-dom'
import Button from '@/component/Button'

const app = <div><h1>Hello, React!</h1><Button></Button></div>

ReactDom.render(app, document.getElementById('app'))