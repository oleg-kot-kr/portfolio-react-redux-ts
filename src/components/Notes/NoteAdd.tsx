import React, { createElement, useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { NoteNewAdd } from '../../types/note';

const NoteAdd: React.FC = () => {
   const { link, language } = useTypedSelector(state => state.nav)

   const { noteAdd } = useActions()

   const addNote = () => {
      const idNote: NoteNewAdd = {
         id: Date.now(),
         valueInputSrt: '',
         valueTextareaSrt: '',
      }
      noteAdd(idNote)
   }

   const textButtonNote = () => {
      return (language === 'ru') ? <p>Добавить Заметку</p> : (language === 'ukr') ? <p>Додати Нотатку</p> : <p>Add Note</p>;
   }

   return (
      <>
         <div>
            <button
               onClick={() => { addNote() }} className="description-notes__add-note page__button"
            >
               {textButtonNote()}
            </button>
         </div>
      </>

   )


   // const routeMatch = useMatch('/');

   // return routeMatch ? (
   //    <div>
   //       <button onClick={() => { addNote() }} className="description-notes__add-note page__button">Добавить Заметку</button>
   //       <Routes>
   //          <Route path="/page-two" Component={PageTwo} />
   //          <Route path="/page-one" Component={PageOne} />
   //       </Routes>

   //    </div>

   // )
   //    :
   //    (<div>
   //       <button onClick={() => { addNote() }} className="description-notes__add-note page__button">Добавить Заметку 12</button>
   //       <Routes>
   //          <Route path="/page-two" Component={PageTwo} />
   //          <Route path="/page-one" Component={PageOne} />
   //       </Routes>

   //    </div>
   //    );

};

export default NoteAdd;
