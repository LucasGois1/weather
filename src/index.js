import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { myStore, myPersistor } from './store'
import App from './App'

ReactDOM.render(
    <Provider store={myStore}>
        <PersistGate loading={null} persistor={myPersistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)