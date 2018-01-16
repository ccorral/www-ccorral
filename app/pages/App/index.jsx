import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../store';

import 'uikit';
import '../../less/theme.less';
import '../../less/styles.less';

import './styles.less';

import Navigation from '../../components/Navigation';
import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';

export default class App extends Component {
  
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        {/* <Navigation /> */}
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* <Route path="/about" component={About} /> */}
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
  
}