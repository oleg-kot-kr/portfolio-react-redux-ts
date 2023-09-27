import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "../store";
import NoteAdd from '../components/Notes/NoteAdd';

import { createRoot } from 'react-dom/client';
import NoteListCode from '../components/Notes/NoteListCode';
import NotePagination from '../components/Notes/NotePagination';

import { BrowserRouter, BrowserRouter as Router, NavLink, Route, Routes, useLocation, useRoutes } from 'react-router-dom'
import Page404 from '../pages/Page404';
import { useTypedSelector } from '../hooks/useTypedSelector';
import SearchForm from '../components/Search/SearchForm';
import PageContacts from '../pages/PageContacts';


const MainBlock: React.FC = () => {

   const { language, languageChanges, languageChangesURL, link } = useTypedSelector(state => state.nav)

   const element = (link: string) => {
      if (link === `/${language}/`) {
         return (
            <>
               <NoteListCode />
               <NotePagination />
            </>
         )
      }
      else if (link === `/${language}/page-search`) {
         return <SearchForm />
      }
      else if (link === `/${language}/contacts`) {
         return <PageContacts />
      }
      else if (link === `/${language}/404`) {
         return <Page404 />
      }
   }


   // let element = useRoutes([
   //       {
   //          path: `${language}/`,
   //          element: <NoteListCode />,
   //       },
   //       // {
   //       //    path: `${language}/`,
   //       //    element: <NotePagination />,
   //       // },
   //       { path: `${language}/new/page/page-one`, element: <PageOne /> },
   //       { path: `${language}/page-two`, element: <PageTwo /> },
   //       { path: `${language}/*`, element: <Page404 /> },
   //       { path: `${language}/contact`, element: 'Контакты' },
   //    ]);


   return (
      <>
         {element(link)}
      </>
   );
};




export default MainBlock;