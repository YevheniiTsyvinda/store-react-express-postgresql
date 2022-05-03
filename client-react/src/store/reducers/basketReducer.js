import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name:'basket',
    initialState:{
        count: 0,
        devices:[]
    },
    reducers:{
        setCount: (state, action)=>{
            state.count = action.payload;
        },
        setDevices: (state,action)=>{
            state.devices = action.payload;
        }
    }
})

export const {
    setCount,
    setDevices
} = basketSlice.actions;
export default basketSlice.reducer;