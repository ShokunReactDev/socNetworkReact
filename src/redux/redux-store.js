import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import communityReducer from "./community-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"
// import { createStore, applyMiddleware,  } from 'redux';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    communityPage : communityReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
}) 



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store;