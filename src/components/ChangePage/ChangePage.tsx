import React, { createContext, createElement, useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Navigate, NavLink, Outlet, Routes, useHref, useMatch, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RoutesLink from './RoutesLink';
// import { Redirect } from 'react-router-dom';


const MenuHeader: React.FC = () => {
   let location = useLocation();
   // const [pathname, pathName] = useState(location.pathname)
   const { language, languageChanges } = useTypedSelector(state => state.nav)
   const { navLinkAction, navLanguageChanges, navLanguageChangesLock } = useActions()
   const navigate = useNavigate();

   const urlLink = (linkHover: string) => {
      const linkAction = linkHover;
      // * ЕСЛИ НАДО МЕНЯТЬ СОСТОЯНИЕ link ПО СОБЫТИЮ КЛИКА, А НЕ ИЗМЕНЕНИЯ УРЛА В АДРЕСНОЙ СТРОКЕ.
      // navLinkAction(linkAction)
   }

   const pathnameUrl = window.location.pathname;

   useEffect(() => {
      const linkAction = location.pathname;
      navLinkAction(linkAction);

      // * ЕСЛИ НАДО МЕНЯТЬ СОСТОЯНИЕ link ПО СОБЫТИЮ КЛИКА, А НЕ ИЗМЕНЕНИЯ УРЛА В АДРЕСНОЙ СТРОКЕ
      // }, []);
   }, [location]);

   const menuLinckChanges = (menuLinck: string) => {
      if (languageChanges !== true) {
         const languageChangesURL = menuLinck;
         navLanguageChanges(true, languageChangesURL);
         setTimeout(() => {
            navLanguageChangesLock(false);
         }, 0)
      }
   }

   const navLink = () => {
      return <>
         <li className="menu__item">
            <NavLink
               to={`/${language}/`}
               className={({ isActive }) => isActive ? "menu__link header__menu_active" : "menu__link"}
               onClick={() => {
                  urlLink("/")
                  menuLinckChanges(`/${language}/`)
               }}
            >
               {() => {
                  return (language === 'ru') ? <p>Главная</p> : (language === 'ukr') ? <p>Головна</p> : <p>Home Page</p>;
               }
               }
            </NavLink>
         </li>
         <li className="menu__item">
            <NavLink
               to={`/${language}/page-search`}
               className={({ isActive }) => isActive ? "menu__link header__menu_active" : "menu__link"}
               onClick={() => {
                  urlLink("/page-search")
                  menuLinckChanges(`/${language}/page-search`)
               }}
            >
               {() => {
                  return (language === 'ru') ? <p>Поиск</p> : (language === 'ukr') ? <p>Пошук</p> : <p>Search</p>;
               }
               }
            </NavLink>
         </li>
         <li className="menu__item">
            <NavLink
               to={`/${language}/contacts`}
               className={({ isActive }) => isActive ? "menu__link header__menu_active" : "menu__link"}
               onClick={() => {
                  urlLink("/contacts")
                  menuLinckChanges(`/${language}/contacts`)
               }}
            >
               {() => {
                  return (language === 'ru') ? <p>Контакты</p> : (language === 'ukr') ? <p>Контакти</p> : <p>Contacts</p>;
               }
               }
            </NavLink>
         </li>
      </>
   }

   return (
      <>
         {navLink()}
         <RoutesLink />
      </>
   );
};


export const MenuFooter: React.FC = () => {
   let location = useLocation();
   // const [pathname, pathName] = useState(location.pathname)
   const { language, languageChanges } = useTypedSelector(state => state.nav)
   const { navLinkAction, navLanguageChanges, navLanguageChangesLock } = useActions()
   const navigate = useNavigate();

   const urlLink = (linkHover: string) => {
      const linkAction = linkHover;
      // * ЕСЛИ НАДО МЕНЯТЬ СОСТОЯНИЕ link ПО СОБЫТИЮ КЛИКА, А НЕ ИЗМЕНЕНИЯ УРЛА В АДРЕСНОЙ СТРОКЕ.
      // navLinkAction(linkAction)
   }

   const pathnameUrl = window.location.pathname;

   useEffect(() => {
      const linkAction = location.pathname;
      navLinkAction(linkAction);

      // * ЕСЛИ НАДО МЕНЯТЬ СОСТОЯНИЕ link ПО СОБЫТИЮ КЛИКА, А НЕ ИЗМЕНЕНИЯ УРЛА В АДРЕСНОЙ СТРОКЕ
      // }, []);
   }, [location]);

   const menuLinckChanges = (menuLinck: string) => {
      if (languageChanges !== true) {
         const languageChangesURL = menuLinck;
         navLanguageChanges(true, languageChangesURL);
         setTimeout(() => {
            navLanguageChangesLock(false);
         }, 0)
      }
   }

   const navLink = () => {
      return <>
         <li className="menu-footer__item">
            <NavLink
               to={`/${language}/`}
               className={({ isActive }) => isActive ? "menu-footer__link footer__menu_active" : "menu-footer__link"}
               onClick={() => {
                  urlLink("/")
                  menuLinckChanges(`/${language}/`)
               }}
            >
               {() => {
                  return (language === 'ru') ? <p>Главная</p> : (language === 'ukr') ? <p>Головна</p> : <p>Home Page</p>;
               }
               }
            </NavLink>
         </li>
         <li className="menu-footer__item">
            <NavLink
               to={`/${language}/page-search`}
               className={({ isActive }) => isActive ? "menu-footer__link footer__menu_active" : "menu-footer__link"}
               onClick={() => {
                  urlLink("/page-search")
                  menuLinckChanges(`/${language}/page-search`)
               }}
            >
               {() => {
                  return (language === 'ru') ? <p>Поиск</p> : (language === 'ukr') ? <p>Пошук</p> : <p>Search</p>;
               }
               }
            </NavLink>
         </li>
         <li className="menu-footer__item">
            <NavLink
               to={`/${language}/contacts`}
               className={({ isActive }) => isActive ? "menu-footer__link footer__menu_active" : "menu-footer__link"}
               onClick={() => {
                  urlLink("/contacts")
                  menuLinckChanges(`/${language}/contacts`)
               }}
            >
               {() => {
                  return (language === 'ru') ? <p>Контакты</p> : (language === 'ukr') ? <p>Контакти</p> : <p>Contacts</p>;
               }
               }
            </NavLink>
         </li>
      </>
   }

   return (
      <>
         {navLink()}
         <RoutesLink />
      </>
   );
};

export default MenuHeader;
