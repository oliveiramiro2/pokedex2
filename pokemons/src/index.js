import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './assets/globalStyled'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import { store } from './store/store'

const theme = {
  colorPrimary: '#000000',
  colorSecondary: "#ffffff",
}

ReactDOM.render(
  <React.StrictMode>
    
    <GlobalStyle />
    <ThemeProvider theme={theme}> 
      <Provider store={store}> 
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
