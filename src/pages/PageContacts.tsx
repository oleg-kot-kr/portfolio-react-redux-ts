import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PageContacts: React.FC = () => {
   const { language } = useTypedSelector(state => state.nav)

   const textLanguage = (ru: string, ukr: string, eng: string) => {
      return (language === 'ru') ? ru : (language === 'ukr') ? ukr : eng;
   }

   return (
      <div className="page__contacts">
         <div className="contacts__body">
            <div className="contacts__title">
               <h3 className="page__title page__contacts_title">{textLanguage('Мои контакты', 'Мої контакти', 'My contacts')}</h3>
            </div>
            <div className="contacts__links">
               <ul className="contacts__list main_contacts">
                  <li className="contacts__item">
                     <p className="contacts__item_telegram"><span className="contacts__item_telegram-title main_contacts">Telegram:</span> @oleg_krivonos_kr</p>
                  </li>
                  <li className="contacts__item">
                     <p className="contacts__item_email"><span className="contacts__item_email-title main_contacts">E-Mail:</span> <a
                        href="mailto:o.krivonos.kr@gmail.com" className="contacts__link">o.krivonos.kr@gmail.com</a>
                     </p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default PageContacts;
