import { combineReducers } from "redux";
import { noteReducer } from "./noteReducer";
import { navReducer } from "./navReducer";
import { searchReducer } from "./searchReducer";


export const rootReducer = combineReducers({
    note: noteReducer,
    nav: navReducer,
    search: searchReducer,
})

// * ReturnType - МЕТОД ПОЛУЧЕНИЯ ТИПА ПЕРЕМЕННОЙ В TypeScript. СТОИТ ОТМЕТИТЬ, ЧТО В РЕДУКС СОСТОЯНИЯ ИЗ ОБЪЕКТА СОСТОЯНИЙ ПОЛУЧАЮТ ПРИ ПОМОЩИ ХУКА useSelector(), ОДНАКО ОН НЕ ПОДДЕРЖИВАЕТ ТИПЫ TypeScript, В СВЯЗИ С ЧЕМ В TypeScript НАДО СОЗДАВАТЬ ОТДЕЛЬНЫЙ ХУК ПРИ ПОМОЩИ МЕТОДА ВОЗВРАЩЕНИЯ ТИПА ReturnType. В ДАННОМ ПРИМЕРЕ, МЫ ПОЛУЧАЕМ ТИП ДАННЫХ КОРНЕВОГО РЕДЮСЕРА. ВСЕ ХУКИ НАХОДЯТСЯ В ПАПКЕ hooks.

export type RootState = ReturnType<typeof rootReducer>
