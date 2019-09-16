import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const target = document.querySelector('#root');

render(<App />, target);

serviceWorker.unregister();
