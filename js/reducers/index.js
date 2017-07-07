import { combineReducers } from 'redux';

import DomuReducer from './domu-reducer';
import PacientiReducer from './pacienti-reducer';

const urgentApp = combineReducers({
    DomuReducer, PacientiReducer
});

export default urgentApp;