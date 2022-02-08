import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Router from './Router';
import GlobalStyle from './styles/global-style';
import { theme } from './styles/theme';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
