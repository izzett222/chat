import client from './utils/api-client';

const localStorageKey = 'token'
export const getToken = () => {
    return window.localStorage.getItem(localStorageKey);
}
const handleUserResponse = ({ data }) => {
    window.localStorage.setItem(localStorageKey, data.token);
    return data;
}
export const login = ({username, password}) => {
    return client('auth/login', { data: { username, password }}).then(handleUserResponse); 
}
export const signup = ({username, password}) => {
    return client('auth/signup', { data: { username, password }}).then(handleUserResponse); 
}
export const logout = () => {
    return window.localStorage.removeItem(localStorageKey)
}