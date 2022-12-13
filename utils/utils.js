import { setItemToLocalStorage } from "../store/localStorage";

export const FETCH_NEXT_PAGE_POST_AT_SCROLL = 90;

export const computeScrollPercentage = (element) => {
    if (element === null) {
        return NaN;
      }
      const height = element.scrollHeight - element.clientHeight;
      return Math.round((element.scrollTop / height) * 100);
}

export const getAllLikedPosts = () => {
  return JSON.parse(localStorage.getItem('liked_posts')) || {};
}

export const cleanPostData = (posts) => {
  let CLEAN_POSTS = {}
  Object.values(posts).map((post) => {
    let PARSED_POST = JSON.parse(post);
    CLEAN_POSTS[PARSED_POST.id] = PARSED_POST;
  });
  return CLEAN_POSTS;
}

export const modifyPostFromLiked = ({postId, type, url, username, userImage}) => {
    let allLikedPosts = getAllLikedPosts();
    if (type == 'add') {
      allLikedPosts[postId] = JSON.stringify({
        id: postId,
        urls: {
          thumb: url
        },
        user: {
          username,
          profile_image: {
            small: userImage
          }
        }
      });
    } else if (type == 'delete') {
      delete allLikedPosts[postId];
    }
    setItemToLocalStorage('liked_posts', JSON.stringify(allLikedPosts));
}
  

let timer;
export const debounce = (func, timeout = 1000) => {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}