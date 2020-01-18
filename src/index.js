import React from 'react';
import ReactDOM from 'react-dom';
import hello from './hello';
import './red.css';
import './blue.scss';
import App from './App';

hello('webpack');

ReactDOM.render(<App />, document.getElementById('root'));
