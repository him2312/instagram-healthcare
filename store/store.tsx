import React from 'react';
import {PostType} from '../components/Post/Post.type';

type State = {
    displayPosts: PostType[],
    searchTerm: string,
    currentPage: number
}

export type Action = {
    type: string,
    payload: any
}

export const initialState: State = {
    displayPosts: [],
    searchTerm: '',
    currentPage: 0,
}

export const FeedContext = React.createContext(initialState);

export const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'APPEND_PAGE_DATA': {
            return {
                ...state,
                displayPosts: [...state.displayPosts, ...action.payload]
            };
        }
        case 'SET_SEARCH_TERM': {
            return {
                    ...state,
                    searchTerm: action.payload
                };
            };
        case 'SET_FIRST_PAGE_DATA': {
            return {
                ...state,
                displayPosts: [...action.payload]
            };
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        default: 
            return state;
    }
}