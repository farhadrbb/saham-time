export const setLocalStorageLogin = (key, data, myCallback) => {
    sessionStorage.setItem(key, JSON.stringify(data));
    myCallback()
}
