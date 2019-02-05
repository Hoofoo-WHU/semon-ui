import * as React from 'react'
import * as ReactDom from 'react-dom'
import Button from '@/component/Button'

import '@/style/app.scss'

const app = <div><Button size='large'>提交</Button></div>

ReactDom.render(app, document.getElementById('app'))