import React, { createElement, useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import { matchPath, Navigate, Outlet, useMatch, useRouteError } from 'react-router';

const RoutesLink: React.FC = () => {
   const { language, languageChanges, languageChangesURL } = useTypedSelector(state => state.nav)

   const pathnameUrl = window.location.pathname;

   return (
      <>
         {pathnameUrl === '/' &&
            <Navigate to={`/${language}/`} replace={true} />
         }
         {languageChanges === true &&
            <Navigate to={languageChangesURL} replace={true} />
         }
         <Routes>
            <Route path={`/${language}/`} />
            <Route path={`/${language}/page-search`} />
            <Route path={`/${language}/contacts`} />
            <Route path={`/${language}/*`} element={<Navigate to={`/${language}/404`} />} />
         </Routes>
      </>
   )
};

export default RoutesLink;
