import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NoteId, NoteState, NoteValueInput, NoteValueTextarea } from '../../types/note';


const NoteListCode: React.FC = () => {
   const { notes, page, limit, fixation } = useTypedSelector(state => state.note)
   const { language } = useTypedSelector(state => state.nav)
   const { noteDelete, setNotesPage, noteValueInput, noteValueTextarea } = useActions()

   const deleteNote = (id: NoteId) => {
      noteDelete(id)
   }

   const lastNote = page * limit;
   const firstNote = lastNote - limit;
   const currentNotes = notes.slice(firstNote, lastNote);

   useEffect(() => {
      if (currentNotes.length == 0) {
         const totalNote = notes.length;
         const pageNumbers = Math.ceil(totalNote / limit)
         setNotesPage(pageNumbers)
      }
   }, [notes])

   const placeholderLanguage = () => {
      let placeholderLanguageSrt = '';
      if (language === 'ru') { placeholderLanguageSrt = 'Название заметки' }
      else if (language === 'ukr') { placeholderLanguageSrt = 'Назва нотатки' }
      else if (language === 'eng') { placeholderLanguageSrt = 'Name of notes' }
      return placeholderLanguageSrt;
   }

   const placeholderTextareaLanguage = () => {
      let placeholderTextareaLanguageSrt = '';
      if (language === 'ru') { placeholderTextareaLanguageSrt = 'Введите текст...' }
      else if (language === 'ukr') { placeholderTextareaLanguageSrt = 'Додайте текст...' }
      else if (language === 'eng') { placeholderTextareaLanguageSrt = 'Enter the text...' }
      return placeholderTextareaLanguageSrt;
   }

   const setValueInput = (e: string, id: number) => {
      const valueInput: NoteValueInput = {
         id: id,
         valueInputSrt: e,
      }
      noteValueInput(valueInput);
   }
   const setValueTextarea = (e: string, id: number) => {
      const valueTextarea: NoteValueTextarea = {
         id: id,
         valueTextareaSrt: e,
      }
      noteValueTextarea(valueTextarea);
   }

   return (
      <div className="items-notes__body">
         {currentNotes.map(item => (
            <article key={item.id} className="items-notes__item item-note">
               <span onClick={() => { deleteNote(item.id) }} className="item-note__delete"></span>
               <input placeholder={placeholderLanguage()} className="item-note__title" type="text" name="title-note" value={item.valueInputSrt} onChange={e => setValueInput(e.target.value, item.id)} />
               <textarea placeholder={placeholderTextareaLanguage()} className="item-note__text" name="text-note" cols={30}
                  rows={10} value={item.valueTextareaSrt} onChange={e => setValueTextarea(e.target.value, item.id)}></textarea>
            </article>
         ))}
      </div>
   );
};

export default NoteListCode;