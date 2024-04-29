import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/ReduxStore.ts';

/*const rootElement = document.getElementById('root');
if (rootElement !== null) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Nie znaleziono elementu o id "root"');
}*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
