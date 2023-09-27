import { Dispatch } from "redux";
import axios from "axios";
import { SearchAction, SearchActionTypes } from "../../types/search";


export const fetchPosts = (limit = 7) => {
   return async (dispatch: Dispatch<SearchAction>) => {
      try {
         dispatch({ type: SearchActionTypes.FETCH_POSTS })
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: { _limit: limit }
         })
         setTimeout(() => {
            dispatch({ type: SearchActionTypes.FETCH_POSTS_SUCCESS, payload: response.data })
         }, 500)
      } catch (e) {
         dispatch({
            type: SearchActionTypes.FETCH_POSTS_ERROR,
            payload: 'Error'
         })
      }
   }
}


export function setInputSearch(search: string): SearchAction {
   return { type: SearchActionTypes.INPUT_SEARCH, payload: search }
}
export function submitSearch(): SearchAction {
   return { type: SearchActionTypes.SUBMIT_SEARCH }
}
export function deleteSearch(): SearchAction {
   return { type: SearchActionTypes.DELETE_SEARCH }
}