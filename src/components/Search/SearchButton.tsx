import React, { createElement, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';


const SearchButton: React.FC = () => {
   let [searchParams, setSearchParams] = useSearchParams();
   const { posts, search, searchStateParams, loading, error } = useTypedSelector(state => state.search)
   const { language, link } = useTypedSelector(state => state.nav)
   const { setInputSearch, submitSearch } = useActions()
   let location = useLocation();

   const textLanguage = (ru: string, ukr: string, eng: string) => {
      return (language === 'ru') ? ru : (language === 'ukr') ? ukr : eng;
   }

   const submitButtonSearch = () => {
      if (search.searchValue.length) {
         submitSearch()
         // setSearchParams({ post: search.searchValue });
      }
      else {
         setInputSearch('');
         // setSearchParams({});
      }
   }

   return (
      <>
         <div>
            <button onClick={() => { submitButtonSearch() }} className="submit__button-search page__button">
               {textLanguage('Поиск', 'Пошук', 'Search')}
            </button>
         </div>
      </>
   )
}

export default SearchButton;
