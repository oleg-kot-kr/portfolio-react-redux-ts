// import { NavActionTypes, NavState, NavAction } from "../../types/nav";

import { SearchAction, SearchActionTypes, SearchState } from "../../types/search"

const initialState: SearchState = {
   posts: [],
   limit: 5,
   loading: false,
   error: null,
   search: {
      searchValue: '',
   },
   searchStateParams: '',
}

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
   switch (action.type) {
      case SearchActionTypes.FETCH_POSTS:
         return { ...state, loading: true }
      case SearchActionTypes.FETCH_POSTS_SUCCESS:
         return { ...state, loading: false, posts: action.payload }
      case SearchActionTypes.FETCH_POSTS_ERROR:
         return { ...state, loading: false, error: action.payload }
      case SearchActionTypes.INPUT_SEARCH:
         return { ...state, search: { searchValue: action.payload } }
      case SearchActionTypes.SUBMIT_SEARCH:
         return { ...state, searchStateParams: state.search.searchValue }
      case SearchActionTypes.DELETE_SEARCH:
         return { ...state, search: { searchValue: '' }, searchStateParams: '' }
      default:
         return state;
   }
}
