import {config} from '../config';

const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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



