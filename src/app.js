import React from 'react'
import ReactDOM from 'react-dom'

import Index from './index'

const title = 'React with Webpack and Babel'

ReactDOM.render(
        <div className="container">
           <Index/>
        </div>,
        document.getElementById('app')
)
