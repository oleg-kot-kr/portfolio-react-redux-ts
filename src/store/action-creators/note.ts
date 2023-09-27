import { NoteAction, NoteActionTypes, NoteId, NoteNewAdd, NoteValueInput, NoteValueTextarea } from "../../types/note";

export function noteAdd(idNote: NoteNewAdd): NoteAction {
   return { type: NoteActionTypes.NOTE_ADD, payload: idNote }
}

export function noteDelete(id: NoteId): NoteAction {
   return { type: NoteActionTypes.NOTE_DELETE, payload: id }
}

export function setNotesPage(page: number): NoteAction {
   return { type: NoteActionTypes.SET_NOTE_PAGE, payload: page }
}
export function noteValueInput(valueInput: NoteValueInput): NoteAction {
   return { type: NoteActionTypes.NOTE_VALUE_INPUT, payload: valueInput }
}
export function noteValueTextarea(valueTextarea: NoteValueTextarea): NoteAction {
   return { type: NoteActionTypes.NOTE_VALUE_TEXTAREA, payload: valueTextarea }
}



