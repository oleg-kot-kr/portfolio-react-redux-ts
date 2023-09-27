import { NoteAction, NoteActionTypes, NoteState } from "../../types/note"

const initialState: NoteState = {
   notes: [],
   page: 1,
   limit: 4,
   fixation: true,
}

export const noteReducer = (state = initialState, action: NoteAction): NoteState => {
   switch (action.type) {
      case NoteActionTypes.NOTE_ADD:
         return { ...state, notes: state.notes.concat(action.payload), fixation: state.fixation = true }
      case NoteActionTypes.NOTE_DELETE:
         return { ...state, notes: state.notes.filter(note => note.id !== action.payload), fixation: state.fixation = false }
      case NoteActionTypes.SET_NOTE_PAGE:
         return { ...state, page: action.payload }
      case NoteActionTypes.NOTE_VALUE_INPUT:
         return { ...state, notes: state.notes.map(item => (item.id === action.payload.id) ? item = { valueInputSrt: action.payload.valueInputSrt, id: item.id, valueTextareaSrt: item.valueTextareaSrt } : item = { valueInputSrt: item.valueInputSrt, id: item.id, valueTextareaSrt: item.valueTextareaSrt }), fixation: state.fixation = false }
      case NoteActionTypes.NOTE_VALUE_TEXTAREA:
         return { ...state, notes: state.notes.map(item => (item.id === action.payload.id) ? item = { valueTextareaSrt: action.payload.valueTextareaSrt, id: item.id, valueInputSrt: item.valueInputSrt } : item = { valueTextareaSrt: item.valueTextareaSrt, id: item.id, valueInputSrt: item.valueInputSrt }), fixation: state.fixation = false }
      default:
         return state;
   }
}