import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import React from 'react';
import App from './pages/App';

render(
    <AppContainer><App /></AppContainer>,
    document.getElementById('root')
);

if (module && module.hot) {
    module.hot.accept('./pages/App', () => {
        const NewApp = require('./pages/App').default;
        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}