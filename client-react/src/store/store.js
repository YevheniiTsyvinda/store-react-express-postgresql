import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import deviceReducer from './reducers/deviceReducer';
import basketReducer from './reducers/basketReducer';

export default configureStore({
    reducer:{
        user: userReducer,
        device: deviceReducer,
        basket: basketReducer,
    }
})