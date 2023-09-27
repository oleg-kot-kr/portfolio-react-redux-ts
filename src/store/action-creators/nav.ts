import { NavAction, NavActionTypes } from "../../types/nav";


export function navLinkAction(linkAction: string): NavAction {
   return { type: NavActionTypes.LINK_ACTION, payload: linkAction }
}
export function navLanguageAction(languageAction: string): NavAction {
   return { type: NavActionTypes.LANGUAGE_ACTION, payload: languageAction }
}
export function navLanguageChanges(languageChanges: boolean, languageChangesURL: string): NavAction {
   return { type: NavActionTypes.LANGUAGE_CHANGES, payload: { languageChanges, languageChangesURL } }
}
export function navLanguageChangesLock(languageChanges: boolean): NavAction {
   return { type: NavActionTypes.LANGUAGE_CHANGES_LOCK, payload: languageChanges }
}
