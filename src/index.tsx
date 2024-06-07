import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/ReduxStore.ts';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
