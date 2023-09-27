import React, { Children } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./store";

import { createRoot } from 'react-dom/client';
import MenuHeader, { MenuFooter } from './components/ChangePage/ChangePage';

import { BrowserRouter, BrowserRouter as Router, HashRouter, NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Language from './components/Language/Language';
import MainBlock from './blocks/MainBlock';
import ButtonBlock from './blocks/ButtonBlock';


const domNodeNotes = document.getElementById('notes') as HTMLElement;
const notes = createRoot(domNodeNotes);
notes.render(
  <Provider store={store}>
    <Router>
      <MainBlock />
    </Router>
  </Provider>
);


const domNodeNoteAddButton = document.getElementById('note-add__button') as HTMLElement;
const noteAddButton = createRoot(domNodeNoteAddButton);
noteAddButton.render(
  <Provider store={store}>
    <Router>
      <ButtonBlock />
    </Router>
  </Provider>
);

const domMenuHeader = document.getElementById('header-menu') as HTMLElement;
const menuHeader = createRoot(domMenuHeader);
menuHeader.render(
  <Provider store={store}>
    <Router>
      <MenuHeader />
    </Router>
    <Language />
  </Provider>
);

const domMenuFooter = document.getElementById('footer-menu') as HTMLElement;
const menuFooter = createRoot(domMenuFooter);
menuFooter.render(
  <Provider store={store}>
    <Router>
      <MenuFooter />
    </Router>
  </Provider>
);
