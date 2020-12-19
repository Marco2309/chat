import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import authReducers from "./reducers/authReducer";

const rootReducers = combineReducers({auth:authReducers})
const store = createStore(rootReducers, applyMiddleware(thunk))
export default store