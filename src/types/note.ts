
export interface NoteState {
   notes: any[];
   page: number;
   limit: number;
   fixation: boolean;
}

export enum NoteActionTypes {
   NOTE_ADD = 'NOTE_ADD',
   NOTE_DELETE = 'NOTE_DELETE',
   SET_NOTE_PAGE = 'SET_NOTE_PAGE',
   SET_FIXATION_PAGE = 'SET_FIXATION_PAGE',
   NOTE_VALUE_INPUT = 'NOTE_VALUE_INPUT',
   NOTE_VALUE_TEXTAREA = 'NOTE_VALUE_TEXTAREA',
}
interface NoteAddAction {
   type: NoteActionTypes.NOTE_ADD;
   payload: NoteNewAdd;
}
interface NoteDeleteAction {
   type: NoteActionTypes.NOTE_DELETE;
   payload: NoteId;
}
export interface NoteId {
   id: number;
}
export interface NoteNewAdd {
   id: number;
   valueInputSrt: string;
   valueTextareaSrt: string;
}
export interface NoteValueInput {
   id: number;
   valueInputSrt: string;
}
export interface NoteValueTextarea {
   id: number;
   valueTextareaSrt: string;
}

interface SetNotePageAction {
   type: NoteActionTypes.SET_NOTE_PAGE;
   payload: number;
}
interface NoteValueInputAction {
   type: NoteActionTypes.NOTE_VALUE_INPUT;
   payload: NoteValueInput;
}
interface NoteValueTextareaAction {
   type: NoteActionTypes.NOTE_VALUE_TEXTAREA;
   payload: NoteValueTextarea;
}


export type NoteAction =
   NoteAddAction
   | NoteDeleteAction
   | SetNotePageAction
   | NoteValueInputAction
   | NoteValueTextareaAction


