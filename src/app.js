import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import _ from 'lodash';
import View from './view';
import {getState, registerCallback} from './model';

const App = () => (
  <MuiThemeProvider>
    <View state={getState()}/>
  </MuiThemeProvider>
);

const root = document.createElement('div');;
document.body.appendChild(root)

const updateUI = () => {
	ReactDOM.render(<App />, root);
};

registerCallback(updateUI);

//initial ui
updateUI();


