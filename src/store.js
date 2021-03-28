import React from "react";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Reducers from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['info']
}

const storeReducer = persistReducer(persistConfig, Reducers)

const myStore = createStore(storeReducer)
const myPersistor = persistStore(myStore)

export {
    myStore,
    myPersistor
}