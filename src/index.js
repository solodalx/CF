import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './js/common/store/configureStore';

import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'
import 'core-js/es6/number';

import InputForm from './js/components/InputForm/InputForm.js'

ReactDOM.render(
    <Provider store={configureStore()}>
        {/*<BrowserRouter>*/}
        <BrowserRouter basename="/ui">
            <App />
            {/*<Route path='/' component={InputForm} />*/}
            {/*<Route path='/output' component={OutputForm} />*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
