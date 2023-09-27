export interface NavState {
   link: string;
   language: string;
   languageChanges: boolean,
   languageChangesURL: string,
}

export enum NavActionTypes {
   LINK_ACTION = 'LINK_ACTION',
   LANGUAGE_ACTION = 'LANGUAGE_ACTION',
   LANGUAGE_CHANGES = 'LANGUAGE_CHANGES',
   LANGUAGE_CHANGES_LOCK = 'LANGUAGE_CHANGES_LOCK',
}
interface NavLinkAction {
   type: NavActionTypes.LINK_ACTION;
   payload: string;
}
interface NavLanguageAction {
   type: NavActionTypes.LANGUAGE_ACTION;
   payload: string;
}
interface NavLanguageChanges {
   type: NavActionTypes.LANGUAGE_CHANGES;
   payload: {
      languageChanges: boolean;
      languageChangesURL: string;
   };
}
interface NavLanguageChangesLock {
   type: NavActionTypes.LANGUAGE_CHANGES_LOCK;
   payload: boolean;
}

export type NavAction =
   NavLinkAction
   |
   NavLanguageAction
   |
   NavLanguageChanges
   |
   NavLanguageChangesLock;


