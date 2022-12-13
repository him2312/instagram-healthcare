
const API_CACHE = {
    // query : data

    // Query will be a combo of `searchTerm_currentPage`
}

export const storeDataToCache = ({query, currentPage, data}) => {
    const index = `${query}_${currentPage}`;
    API_CACHE[index] = data;
    return;
}

export const getDataFromCache = ({query, currentPage}) => {
    const index = `${query}_${currentPage}`;
    if (API_CACHE[index]) {
        console.log('return cached value', API_CACHE[index]);
        return API_CACHE[index];
    }
    return null;
}
