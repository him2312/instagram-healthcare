import React, { useState } from "react";
import styled from "styled-components";
import {debounce} from '../../utils/utils.js';
import {fetchPaginatedData, fetchSearchData} from '../../api/api.js';
import { Action } from "store/store.jsx";
import { PostType } from "../Post/Post.type.jsx";

const InputBox = styled.input`
    padding: 10px;
    border-radius: 10px;
    width: 50%;
    background: #e2e2e2;
    border: none;
    box-shadow: 1px 1px 2px 2px #d9d9d9;

    @media screen and (min-width: 769px) {
        width: 30%;
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px) { 
        width: 35%;
    }
    
    @media only screen and (max-width: 480px) {
        width: 50%;
    }
`

type SearchProps = {
    setSearchData: React.Dispatch<Action>
}

export const Search = (props: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPostsOnUserSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
        props.setSearchData({type: 'SET_SEARCH_TERM', payload: searchTerm})
        fetchPostsFromQuery(searchTerm);
    }

    const fetchPostsFromQuery = debounce((searchTerm: string) => {
        if (searchTerm.trim() === '') {
            fetchPaginatedData(0, setDisplayPosts)
        } else {
            props.setSearchData({type: 'SET_CURRENT_PAGE', payload: 0})
            fetchSearchData(searchTerm, 0,  setDisplayPosts);
        }
    }, 1000)

    const setDisplayPosts = (data: PostType[]) => {
        props.setSearchData({type: 'SET_FIRST_PAGE_DATA', payload: data})
    }

    return (
        <InputBox type="text" placeholder='Search' value={searchTerm} onChange={(e) => fetchPostsOnUserSearch(e.target.value)}/>
    )
}