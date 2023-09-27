// * ФАЙЛ ДЛЯ ОБЪЕДИНЕНИЯ ВСЕХ ЭКШЕН-КРИЕЙТЕРОВ.
// ? import * as - ИМПОРТИРОВАТЬ ВСЕ, ЧТО ЭКСПОРТИРУЕТСЯ В УКАЗАННОМ ФАЙЛЕ, ОТКУДА ПРОИСХОДИТ ИМПОРТ, В УКАЗАННУЮ ПЕРЕМЕННУЮ. ПОСЛЕ ЧЕГО МОЖНО получить доступ к элементам ПРИ ПОМОЩИ точечной НОТАЦИИ: Utils.myLogger();

import * as NoteActionCreators from './note'
import * as NavActionCreators from './nav'
import * as SearchActionCreators from './search'

// * ЭКСПОРТ ОБЪЕКТА, КОТОРЫЙ ОБЪЕДИНЯЕТ В СЕБЕ ИМПОРТИРОВАННЫЕ ЭКШЕН-КРИЕЙТЕРЫ.
// ? Так как в файле может быть максимум один export default, то экспортируемая сущность не обязана иметь имя.
export default {
    ...NoteActionCreators,
    ...NavActionCreators,
    ...SearchActionCreators,
}
