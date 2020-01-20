import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import StoreProvider from './store/StoreContext';

import * as serviceWorker from './serviceWorker';
import App from './app/App';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
