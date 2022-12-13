import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { Post } from "../Post/Post";
import { fetchPaginatedData, fetchSearchData } from "../../api/api";
import { Search } from "../Search/Search";
import { initialState, reducer } from "store/store";
import {
    cleanPostData,
  computeScrollPercentage,
  debounce,
  FETCH_NEXT_PAGE_POST_AT_SCROLL,
  getAllLikedPosts,
} from "../../utils/utils";

const NewsFeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 100px);
  overflow-y: scroll;
`;

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const NoPost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: -50px;
  padding: 50px 0px;
`

export const Feed = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [likedPosts, setLikedPosts] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPaginatedData(state.currentPage, setFirstPageData);
  }, []);

  useEffect(() => {
    let STRINGIFIED_likedPosts = getAllLikedPosts();
    let cleanLikedPosts = cleanPostData(STRINGIFIED_likedPosts);
    setLikedPosts({ ...cleanLikedPosts});
  }, []);

  const setFirstPageData = (data) => {
    setIsLoading(false);
    dispatch({ type: "SET_FIRST_PAGE_DATA", payload: data });
    dispatch({ type: "SET_CURRENT_PAGE", payload: state.currentPage + 1 });
  };

  const appendPageData = (data) => {
    setIsLoading(false);
    dispatch({ type: "APPEND_PAGE_DATA", payload: data });
    dispatch({ type: "SET_CURRENT_PAGE", payload: state.currentPage + 1 });
  };

  const fetchMorePosts = debounce((element) => {
    let scrollPercentage = computeScrollPercentage(element);

    if (scrollPercentage >= FETCH_NEXT_PAGE_POST_AT_SCROLL) {
      let nextPage = state.currentPage + 1;

      // Check if the API should be with query or without
      if (state.searchTerm) {
        setIsLoading(true);
        fetchSearchData(state.searchTerm, nextPage, appendPageData);
      } else {
        setIsLoading(true);
        fetchPaginatedData(nextPage, appendPageData);
      }
    }
  }, 100);

  const { displayPosts } = state;
  return (
    <>
      <SearchBox>
        <Search setSearchData={dispatch} />
      </SearchBox>
      <NewsFeedContainer onScroll={(event) => fetchMorePosts(event.target)}>
        {displayPosts.length > 0 ? (
          <>
            {displayPosts.map((post) => (
              <Post key={post["id"]} data={post} 
              likedPost={likedPosts[post?.id] ? true : false}
              />
            ))}
          </>
        ) : (
          <NoPost>No posts</NoPost>
        )}
        {
          isLoading && <Loading>Loading...</Loading>
        }
      </NewsFeedContainer>
    </>
  );
};
