import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import deviceReducer from './reducers/deviceReducer';

export default configureStore({
    reducer:{
        user: userReducer,
        device: deviceReducer
    }
})