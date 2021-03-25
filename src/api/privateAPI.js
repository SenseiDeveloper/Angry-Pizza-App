import {config} from '../config';

const authHeaders = token => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-token': token
    }
};

export const savePizzaConstructor = (data,token) => {
    return fetch(`${config.baseURL}/save-pizza`,{
        headers: authHeaders(token),
        method: "POST",
        body: JSON.stringify(data)
    })
};

export const loadPizzaUser = (token,id) => {
    return fetch(`${config.baseURL}/pizza-list-user/${id}`,{
        headers: authHeaders(token),
        method: "GET",
    })
};

export const saveAddress = (data,token) => {
    return fetch(`${config.baseURL}/save-user-address`,{
        headers: authHeaders(token),
        method: "POST",
        body: JSON.stringify(data)
    })
};

export const getUserData = (token,id) => {
    return fetch(`${config.baseURL}/user/${id}`,{
        headers: authHeaders(token),
        method: "GET",
    })
};
