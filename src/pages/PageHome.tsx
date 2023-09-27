import React, { useEffect } from 'react';

import NoteListCode from '../components/Notes/NoteListCode';
import NotePagination from '../components/Notes/NotePagination';


const PageHome: React.FC = () => {

   return (
      <>
         <NoteListCode />
         <NotePagination />
      </>
   );
};

export default PageHome;