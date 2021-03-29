import {config} from '../config';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const loadProducts = () => {
    return fetch(`${config.baseURL}/pizza-products`,{
        headers,
        method: "GET",
    });
};

export const loadPizzas = () => {
    return fetch(`${config.baseURL}/pizza-list`,{
        headers,
        method: "GET",
    })
};
