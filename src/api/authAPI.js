import {config} from '../config';

export const registerUser = (data) => {
    return fetch(`${config.baseURL}/create-user`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    });
};
