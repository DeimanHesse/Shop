import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createBasket = async (deviceId) => {
    const {data} = await $authHost.post('api/basket_device', deviceId)
    return data
}


export const fetchBasket = async () => {
    const {data} = await $authHost.get('api/basket_device')
    return data
}

export const deletehIte = async (id) => {
    const {data} = await $authHost.delete('api/basket_device/'+ id)
    return data
}
