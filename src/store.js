import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import authReducers from "./reducers/authReducer";
import usersReducer from "./reducers/userReducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({authReducers, usersReducer})
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
export default store