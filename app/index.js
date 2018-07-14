import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory'
import history from './history';

import configureStore from './store';
import Root from './root';

const store = configureStore();

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component history={history} store={store} />
        </AppContainer>,
        document.getElementById('root')
    )
}

if (module && module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(NewRoot);
    });
}

render(Root);