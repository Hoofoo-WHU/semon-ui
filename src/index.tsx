import * as React from 'react'
import * as ReactDom from 'react-dom'
import Button from '@/component/Button'

import '@/style/app.scss'

const clickHandle: React.MouseEventHandler = function (e) {
  alert('点击了！')
}

const app = <div>
  <Button size='small' onClick={clickHandle}>点我</Button>
  <Button>点我</Button>
  <Button size='large'>点我</Button>
</div>

ReactDom.render(app, document.getElementById('app'))