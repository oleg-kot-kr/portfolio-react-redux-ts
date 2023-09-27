import React, { createContext, createElement, useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { NavLink, Outlet, Routes, useMatch, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useLocation } from 'react-router-dom';

const Language: React.FC = () => {
   // let location = useLocation();
   // const [pathname, pathName] = useState(location.pathname)
   const { language, languageChanges, languageChangesURL } = useTypedSelector(state => state.nav)
   const { navLanguageAction, navLanguageChanges, navLanguageChangesLock } = useActions()

   useEffect(() => {
      const langugeForm = document.querySelector("[data-language]") as HTMLElement;
      langugeForm.addEventListener("click", changeLanguage);

      const langugeSelect = langugeForm.querySelector('.select__content') as HTMLElement;
      const valueStartLanguage = String(langugeSelect.textContent);
      navLanguageAction(valueStartLanguage.toLowerCase());

      function changeLanguage(e: any) {
         const optionSelect = e.target;
         // const langugeSelect = optionSelect.querySelector('.select__content');
         // console.log(langugeSelect)

         if (optionSelect.hasAttribute('data-value')) {
            const valueLanguage = optionSelect.getAttribute('data-value').toLowerCase();

            navLanguageAction(valueLanguage);
            const pathnameUrl = window.location.pathname;

            const pathnameArr = pathnameUrl.split('/').filter((item, i) => item[i] !== item[0 || 1]);
            const pathnameSrt = pathnameArr.join('/');

            window.history.pushState({ route: valueLanguage }, "", `/${valueLanguage}/${pathnameSrt}`);

            if (languageChanges !== true) {
               const languageChangesURL = `/${valueLanguage}/${pathnameSrt}`;
               navLanguageChanges(true, languageChangesURL);
               setTimeout(() => {
                  navLanguageChangesLock(false);
               }, 0)
            }
         }
      }

      // * Установка выпадающему меню соответствующего языка при заходе на сайт по конкретному адресу.  
      const pathnameLangugeUrl = window.location.pathname;

      if (pathnameLangugeUrl.length > 1) {
         const pathnameLangugeArr = pathnameLangugeUrl.split('/').filter((item, i) => i == 1);
         const pathnameLangugeString = String(pathnameLangugeArr);

         if (valueStartLanguage.toLowerCase() !== pathnameLangugeString) {
            console.log(pathnameLangugeString)
            const selectOptions = langugeForm.querySelector('.select__options') as HTMLElement;
            const selectOption = selectOptions.querySelectorAll('.select__option');
            navLanguageAction(pathnameLangugeString);

            selectOption.forEach(item => {
               const i = item as HTMLElement;
               i.hidden = false;
               const dataValue = String(i.getAttribute('data-value'));

               if (dataValue.toLowerCase() == pathnameLangugeString) {
                  const languageTextContent = String(i.textContent);
                  i.hidden = true;
                  langugeSelect.textContent = languageTextContent;
               }
            });
         }
      }
   }, []);

   return (
      <>
         {/* <select name='form[]' data-class-modif="language">
            <option value="Ru" selected>Ru</option>
            <option value="Ukr">Ukr</option>
            <option value="Eng">Eng</option>
         </select> */}
      </>
   );
};



// export const TextLanguage: React.FC = ( {ru, ukr, eng} )  => {
//    const { language } = useTypedSelector(state => state.nav)

//    return (language === 'ru') ? ru : (language === 'ukr') ? ukr : eng;
// }

export default Language;
