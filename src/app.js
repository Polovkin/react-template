import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button";

import img from './images/1.png'

const title = 'React with Webpack and Babel';

ReactDOM.render(
        <div className="container">
            <h1>React</h1>
            <p>{title}</p>
            <img src={img}
                 alt=""/>
            <Button/>
        </div>,
        document.getElementById('app')
);
