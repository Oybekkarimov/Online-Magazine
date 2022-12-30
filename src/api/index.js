import axios from "../utils/axios";
import configs from "../configs";

// https://shopzone.onrender.com/auth/sign-up

export function signUp(query) {
    if (!query) {
        throw "Please insert type parametr";
    }
    let url = `auth/sign-up`;
    return axios.post(url, {
        name: `${query.name}`,
        lastName: `${query.lastName}`,
        email: `${query.email}`,
        phone: `${query.phone}`,
        password: `${query.password}`,
    });
}


export function signIn(query) {
    if (!query) {
        throw "Please insert type parametr";
    }

    let url = `auth/sign-in`;
    return axios.post(url, {
        email: `${query.email}`,
        password: `${query.password}`,
    });
}

