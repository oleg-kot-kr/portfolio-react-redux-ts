export interface SearchState {
   posts: any[];
   limit: number;
   loading: boolean;
   error: null | string;
   search: {
      searchValue: string;
   };
   searchStateParams: string;
}

export enum SearchActionTypes {
   FETCH_POSTS = 'FETCH_POSTS',
   FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
   FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
   INPUT_SEARCH = 'INPUT_SEARCH',
   SUBMIT_SEARCH = 'SUBMIT_SEARCH',
   DELETE_SEARCH = 'DELETE_SEARCH',
}
interface FetchPostsAction {
   type: SearchActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
   type: SearchActionTypes.FETCH_POSTS_SUCCESS;
   payload: any[];
}
interface FetchPostsErrorAction {
   type: SearchActionTypes.FETCH_POSTS_ERROR;
   payload: string;
}
interface InputSearchAction {
   type: SearchActionTypes.INPUT_SEARCH;
   payload: string;
}
interface SubmitSearchAction {
   type: SearchActionTypes.SUBMIT_SEARCH;
}
interface DeleteSearchAction {
   type: SearchActionTypes.DELETE_SEARCH;
}

export type SearchAction =
   FetchPostsAction
   | FetchPostsErrorAction
   | FetchPostsSuccessAction
   | InputSearchAction
   | SubmitSearchAction
   | DeleteSearchAction
