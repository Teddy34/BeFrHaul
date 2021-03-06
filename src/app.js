import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import _ from 'lodash';
import View from './view';
import CircularProgress from 'material-ui/CircularProgress';
import {getState, registerCallback} from './model';
import i18n from './i18n'; // initialized i18next instance
import { I18nextProvider } from 'react-i18next';

const getView = () => getState().tradeRoutes?<View state={getState()}/>:<CircularProgress size={2} />

const App = () => (
  <I18nextProvider i18n={ i18n }>
    <MuiThemeProvider>
      {getView()}
    </MuiThemeProvider>
  </I18nextProvider>
);

const root = document.createElement('div');;
document.body.appendChild(root)

const updateUI = () => {
	ReactDOM.render(<App />, root);
};

registerCallback(updateUI);

//initial ui
updateUI();


