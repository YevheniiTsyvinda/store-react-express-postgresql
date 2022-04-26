import {createSlice} from '@reduxjs/toolkit'

export const deviceSlice = createSlice({
    name: 'device',
    initialState:{
        selectedType: {id: 1,name:'Smartphone'}, 
        types: [
            {id: 1,name:'Smartphone'},
            {id: 2,name:'TV'},
            {id: 3,name:'Frige'},
            {id: 4,name:'Computer'},
        ],
        selectedBrand: {id: 1,name:'Apple'},
        brands:[
            {id: 1,name:'Apple'},
            {id: 2,name:'Samsung'},
            {id: 3,name:'Xiaomi'}
        ],
        devices:[
            {id: 1, name:'Iphone 12 Pro', price: 40000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXy4VHsrLyVPWDiqgF73cjLvMQP4LoTWDo_BbqxOBQzIsY-dc8lO5DYAO_VVXC0IKczg&usqp=CAU'},
            {id: 2, name:'Iphone 12 Pro', price: 40000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXy4VHsrLyVPWDiqgF73cjLvMQP4LoTWDo_BbqxOBQzIsY-dc8lO5DYAO_VVXC0IKczg&usqp=CAU'},
            {id: 3, name:'Iphone 12 Pro', price: 40000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXy4VHsrLyVPWDiqgF73cjLvMQP4LoTWDo_BbqxOBQzIsY-dc8lO5DYAO_VVXC0IKczg&usqp=CAU'},
            {id: 4, name:'Iphone 12 Pro', price: 40000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXy4VHsrLyVPWDiqgF73cjLvMQP4LoTWDo_BbqxOBQzIsY-dc8lO5DYAO_VVXC0IKczg&usqp=CAU'},
        ]
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
    }
});

export const {
    setTypes,
    setBrands,
    setDevices,
    setSelectedType,
    setSelectedBrand,
} = deviceSlice.actions;
export default deviceSlice.reducer;