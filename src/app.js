import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/button/Button";

const title = 'React with Webpack and Babel';

ReactDOM.render(
        <div className="container">
            <h1>React</h1>
            <p>{title}</p>
            <Button/>
        </div>,
        document.getElementById('app')
);
