import React, { useEffect } from 'react';
import NoteAdd from '../components/Notes/NoteAdd';

import { BrowserRouter, BrowserRouter as Router, NavLink, Route, Routes, useLocation, useRoutes } from 'react-router-dom'
import Page404 from '../pages/Page404';
import { useTypedSelector } from '../hooks/useTypedSelector';
import SearchForm from '../components/Search/SearchForm';
import SearchButton from '../components/Search/SearchButton';


const ButtonBlock: React.FC = () => {

   const { language, languageChanges, languageChangesURL, link } = useTypedSelector(state => state.nav)

   const element = (link: string) => {
      if (link === `/${language}/`) {
         return <NoteAdd />
      }
      else if (link === `/${language}/page-search`) {
         return <SearchButton />
      }
      else if (link === `/${language}/page-two`) {
         return <NoteAdd />
      }
      // else if (link === `/${language}/contacts`) {
      //    return 'Контакты';
      // }
   }

   return (
      <>
         {element(link)}
      </>
   );
};


export default ButtonBlock;