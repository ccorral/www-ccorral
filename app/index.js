import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import history from './history'
import amplitude from 'amplitude-js'

import configureStore from './store'
import Root from './root'

const store = configureStore()
amplitude.getInstance().init(process.env.AMPLITUDE_API_KEY)

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
        const NewRoot = require('./root').default
        render(NewRoot)
    })
}

render(Root)