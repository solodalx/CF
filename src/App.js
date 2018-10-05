import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// import logo from './img/logo.svg';
import './App.css';
// import Photo from './js/Others/Photo.js';

import {pathname} from './js/common/properties';
import InputForm from './js/components/InputForm/InputForm'
import OutputForm from './js/components/OutputForm/OutputForm'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    {/*<Route exact path='/ui/' component={InputForm}/>*/}
                    <Route exact path='/' component={InputForm}/>
                    <Route path='/input' component={InputForm}/>
                    {/*<Route path='/ui/output' component={OutputForm}/>*/}
                    <Route path='/output' component={OutputForm}/>
                    {/*<Route path='/ui/' component={InputForm}/>*/}
                    <Route path='/' component={InputForm}/>
                    {/*<Route path='/ui' component={InputForm}/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;


