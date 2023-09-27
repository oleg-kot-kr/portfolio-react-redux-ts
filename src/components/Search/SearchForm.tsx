import React, { createElement, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';


const SearchForm: React.FC = () => {
   let [searchParams, setSearchParams] = useSearchParams();
   const { posts, search, searchStateParams, loading, error, limit } = useTypedSelector(state => state.search)
   const { language } = useTypedSelector(state => state.nav)
   const { fetchPosts, setInputSearch, deleteSearch } = useActions()

   const postQuery: string = searchParams.get('post') || '';

   const textLanguage = (ru: string, ukr: string, eng: string) => {
      return (language === 'ru') ? ru : (language === 'ukr') ? ukr : eng;
   }

   useEffect(() => {
      fetchPosts(limit);
   }, []);

   if (loading) {
      return <h1>{textLanguage('Идет загрузка...', 'Іде завантаження...', 'Loading...')}</h1>
   }
   if (error) {
      return <div className="error__search-form"><h1>{error}</h1> <h2>{textLanguage('Произошла ошибка при загрузке списка постов', 'Виникла помилка при завантаженні списку постів', 'An error occurred while loading the list of posts')}</h2></div>;
   }

   const inputSearch = (inputSearch: string) => {
      if (inputSearch.length) {
         setInputSearch(inputSearch.toLowerCase());
         // setSearchParams({ post: inputSearch });
      }
      else {
         setInputSearch('');
         // setSearchParams({});
      }
   }

   const buttonSearchClean = () => {
      deleteSearch()
      // setSearchParams({});
   }

   const valueSearch = () => {
      // if (search.searchValue.length > 0) {
      //    return search.searchValue;
      if (postQuery.length > 0) {
         return postQuery;
      } else {
         return searchStateParams;
      }
   }
   const valueInputSearch = () => {
      if (postQuery.length > 0) {
         return postQuery;
      } else {
         return search.searchValue;
      }
   }

   const arrPosts = () => {
      // const p1 = posts.filter(post => post.title.includes(postQuery))
      const p1 = posts.filter(post => post.title.includes(valueSearch()))
      const p2 = p1.map(post => (
         <li className='item-posts__body' key={post.id}><span className='item-posts__id'>{post.id}</span><p className='item-posts__title'>{post.title}</p></li>
      ))
      if (p2.length > 0) {
         return p2;
      } else {
         return <div className='search__posts-clean_text'><p>{textLanguage('Ничего не найдено', 'Нічого не знайдено', 'Nothing found')}</p></div>;
      }
   }

   const formPreventDefault = (e: any) => {
      e.preventDefault();
   }

   return (
      <div className='search__posts'>
         <h1 className='search__posts-title'>{textLanguage('Поиск', 'Пошук', 'Search')}</h1>

         <form className='search__posts-form form-search' autoComplete="off" onSubmit={formPreventDefault}>
            <input className='form-search__input' type="search" name="search" value={valueInputSearch()} onChange={e => inputSearch(e.target.value)} />
            <button className='form-search__button-clean' type="button" onClick={buttonSearchClean}>
               {textLanguage("Очистить", "Очистити", "Clean")}
            </button>
         </form>
         <div className="search__posts-list">
            <ul className='search__posts-items item-posts'>
               {arrPosts()}
            </ul>
         </div>
      </div>
   )
}

export default SearchForm;
