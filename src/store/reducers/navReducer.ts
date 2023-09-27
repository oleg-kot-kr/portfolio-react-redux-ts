import { NavActionTypes, NavState, NavAction } from "../../types/nav";

const initialState: NavState = {
   link: '',
   language: 'ru',
   languageChanges: false,
   languageChangesURL: '',
}

export const navReducer = (state = initialState, action: NavAction): NavState => {
   switch (action.type) {
      case NavActionTypes.LINK_ACTION:
         return { ...state, link: action.payload }
      case NavActionTypes.LANGUAGE_ACTION:
         return { ...state, language: action.payload }
      case NavActionTypes.LANGUAGE_CHANGES:
         return { ...state, languageChanges: action.payload.languageChanges, languageChangesURL: action.payload.languageChangesURL }
      case NavActionTypes.LANGUAGE_CHANGES_LOCK:
         return { ...state, languageChanges: action.payload }
      default:
         return state;
   }
}