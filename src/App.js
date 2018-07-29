import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// import logo from './img/logo.svg';
import './App.css';
// import Photo from './js/Others/Photo.js';

import InputForm from './js/components/InputForm/InputForm.js'
import OutputForm from './js/components/OutputForm/OutputForm.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={InputForm}/>
                    <Route path='/input' component={InputForm}/>
                    <Route path='/output' component={OutputForm}/>
                </Switch>
            </div>
        );
    }
}

export default App;


