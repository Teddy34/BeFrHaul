import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import _ from 'lodash';
import View from './view';

const App = () => (
  <MuiThemeProvider>
    <View/>
  </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
  document.getElementById('app')
);

