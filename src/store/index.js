import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { user } from './user/reducers';
import { ads }  from './ads/reducers';

import { setUserLS, setAdsLS } from '../utils/localStorage';


const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

export function configureStore(preloadedState) {
    
    const reducer = combineReducers({
        user, 
        ads,
    });
    
    const middlewares = [thunkMiddleware];
    
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(loggerMiddleware);
    }
    
    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    store.subscribe(function () {
        // User user.user & ads.ads by combineReducers. View to rename
        setUserLS(store.getState().user.user)
        setAdsLS(store.getState().ads)
    });

    return store;
}
