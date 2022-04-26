import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        isAuth: true,
        user:{}
    },
    reducers:{
        setIsAuth:(state,action)=>{
            state.isAuth = action.payload;
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        logOut:(state)=>{
            state.user = {};
            state.isAuth = false;
        }
    }
});

export const {setIsAuth,setUser,logOut} = userSlice.actions;
export default userSlice.reducer;