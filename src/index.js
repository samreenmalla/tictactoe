import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components of MuiThemeProvider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import App from './App.js';
import  Board from './Board.js'
import Game from './Game.js'

ReactDOM.render(
  <App />,
  document.getElementById('root'));
  registerServiceWorker();
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );