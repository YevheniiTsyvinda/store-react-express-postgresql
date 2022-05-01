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
            setPage(1);
            state.types = action.payload;
        },
        setSelectedType: (state,action) =>{
            setPage(1);
            state.selectedType = action.payload;
        },
        setSelectedBrand: (state,action) =>{
            console.log({payload: action.payload})
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
        },
        setLimit:(state, action) =>{
            state.limit = action.payload;
        },
        setPage:(state, action) =>{
            state.page = action.payload;
        },
    }
});

export const {
    setTypes,
    setBrands,
    setDevices,
    setSelectedType,
    setSelectedBrand,
    setTotalCount,
    setLimit,
    setPage
} = deviceSlice.actions;
export default deviceSlice.reducer;