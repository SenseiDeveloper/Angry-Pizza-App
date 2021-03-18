import {config} from '../config';

const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

const authHeaders = token => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-token': token
    }
};

export const registerUser = (data) => {
    return fetch(`${config.baseURL}/create-user`, {
        headers,
        method: "POST",
        body: JSON.stringify(data)
    });
};

export const loginUser = (data) => {
    return fetch(`${config.baseURL}/login`, {
        headers,
        method: "POST",
        body: JSON.stringify(data)
    });
};

export const loadProducts = () => {
    return fetch(`${config.baseURL}/pizza-products`,{
        headers,
        method: "GET",
    });
};

export const loadPizzas = () => {;
    return fetch(`${config.baseURL}/pizza-list`,{
        headers,
        method: "GET",
    })
};

export const savePizzaConstructor = (data,token) => {
    return fetch(`${config.baseURL}/save-pizza`,{
        headers: authHeaders(token),
        method: "POST",
        body: JSON.stringify(data)
    })
};
