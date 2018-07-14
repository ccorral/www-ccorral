import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles.less';

import Home from '../Home';
import NotFound from '../NotFound';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}