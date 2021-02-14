// index.js
// создание свойства класса без конструктора
import image from './images/1.png'
import font from './fonts/font.woff'
import './scss/main.scss'

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with Webpack and Babel';

ReactDOM.render(
        <div className="container">
            <h1>React</h1>
            {title}
        </div>,
        document.getElementById('app')
);
