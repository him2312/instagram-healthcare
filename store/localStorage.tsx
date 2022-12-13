
export const setItemToLocalStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
}

export const deleteItemFromLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
}

export const getItemFromLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}