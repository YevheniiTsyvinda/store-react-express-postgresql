import {createSlice} from '@reduxjs/toolkit'

export const deviceSlice = createSlice({
    name: 'device',
    initialState:{
        selectedType: {}, 
        types: [],
        selectedBrand: {},
        brands:[],
        devices:[],
        totalCount: 0,
        limit: 3,
        page: 1
    },
    reducers:{
        setTypes:(state,action)=>{
            state.types = action.payload;
        },
        setSelectedType: (state,action) =>{
            state.selectedType = action.payload;
        },
        setSelectedBrand: (state,action) =>{
            state.selectedBrand = action.payload;
        },
        setBrands:(state,action)=>{
            state.brands = action.payload;
        },
        setDevices:(state,action)=>{
            state.devices = action.payload;
        },
        setTotalCount:(state, action) =>{
            state.totalCount = action.payload;
        }
    }
});

export const {
    setTypes,
    setBrands,
    setDevices,
    setSelectedType,
    setSelectedBrand,
    setTotalCount,
} = deviceSlice.actions;
export default deviceSlice.reducer;