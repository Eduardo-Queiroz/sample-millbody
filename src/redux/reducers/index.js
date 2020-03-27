import {combineReducers} from 'redux';
import {Reducer as global} from './global';

const AppReducer = combineReducers({
  global,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      state = undefined;
      break;
  }
  return AppReducer(state, action);
};

export default rootReducer;
