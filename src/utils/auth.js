export const BASE_URL = 'http://79.143.31.216';

export const register = (username, password) => {
    return fetch(`${BASE_URL}/register?username=${username}&password=${password}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
}
export const authorize = (username, password) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
    })
        .then(res => res.json())
        .then(data => {
            if (data.access_token) {
                localStorage.setItem('jwt', data.access_token);
                return data;
            }
        })
}
export const getData = () => {
    return fetch(`${BASE_URL}/statistics`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer`,
        },
    })
    .then(res => res.json())
}
export const addUserLink = (data) => {
    return fetch(`${BASE_URL}/squeeze?link=${data}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer`,
        },
    })
    .then(res => res.json())
}
