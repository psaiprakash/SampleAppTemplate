import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: '@prcStore-7',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(ReduxThunk))
    : applyMiddleware(ReduxThunk),
);
const persistor = persistStore(store);
export {persistor};
export default store;
