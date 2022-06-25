import {legacy_createStore,combineReducers} from "redux";
 
import {reducer} from "./reducer";
import {reducer as authReducer} from "../Auth/reducer";
// legacy_createStore
const rootReducer=combineReducers({reducer,authReducer})
export const store=legacy_createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());