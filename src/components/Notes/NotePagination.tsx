import React, { createElement, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const NotePagination: React.FC = () => {
   const { notes, page, limit, fixation } = useTypedSelector(state => state.note)
   const { setNotesPage } = useActions()

   const pageNumbers = [];
   const totalNote = notes.length;

   for (let i = 1; i <= Math.ceil(totalNote / limit); i++) {
      pageNumbers.push(i)
   }

   useEffect(() => {
      if (fixation) {
         const totalPge = pageNumbers.length;
         setNotesPage(totalPge)
      }
   }, [notes])

   const pageNotes = (number: number) => {
      setNotesPage(number)
   }

   return (
      <div className="notes__pagination">
         <ul className="notes__pagination-items">
            {
               pageNumbers.map(number => (
                  <li className="notes__pagination-item" key={number} onClick={() => pageNotes(number)} style={{ border: number === page ? '3px solid green' : '1px solid gray', padding: 10 }}>
                     <span className="notes__pagination-link">
                        {number}
                     </span>
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

export default NotePagination;
