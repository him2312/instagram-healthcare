import { storeDataToCache, getDataFromCache } from "../utils/cache";

const CLIENT_ID = "cHzzaJY0gf0Ov0CZ0qR_II4g74CCNjsIVVYviiqrB8I";

const cacheChecker = ({ query, currentPage }) => {
  const cacheValue = getDataFromCache({
    query,
    currentPage,
  });
  return cacheValue;
};

export const fetchPaginatedData = (currentPage, callback) => {
  const cacheValue = cacheChecker({ query: "", currentPage });

  if (cacheValue) {
    return callback && callback(cacheValue);
  } else {
    fetch(
      `https://api.unsplash.com/collections/3174571/photos/?client_id=${CLIENT_ID}&page=${currentPage}&per_page=10`
    )
      .then((response) => {
        response.json().then((data) => {
          storeDataToCache({
            query: "",
            currentPage,
            data: data,
          });
          callback && callback(data);
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
};

export const fetchSearchData = (query, currentPage, callback) => {
  const cacheValue = cacheChecker({ query, currentPage });

  if (cacheValue) {
    return callback && callback(cacheValue);
  } else {
    fetch(
      `https://api.unsplash.com//search/photos/?client_id=${CLIENT_ID}&query=${query}&page=${currentPage}&per_page=10`
    )
      .then((response) => {
        response.json().then((data) => {
          storeDataToCache({
            query,
            currentPage,
            data: data.results,
          });
          callback && callback(data.results);
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
};
