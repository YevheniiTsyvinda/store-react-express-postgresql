import { $authHost } from "./index";

export const addToBasket = async (deviceId) =>{
    const {data} = await $authHost.post('api/basket', {deviceId});
    return data;
}

export const getAll = async ()=>{
    const {data} = await $authHost.get('api/basket');
    return data;
}

export const remove = async (basketDeviceId)=>{
    const {data}=await $authHost.post('api/basket/remove',{basketDeviceId});
    return data;
}