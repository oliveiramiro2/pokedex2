import { combineReducers } from "redux"

import cardsPoke from './cardsR'
import infoPoke from './infoR'

export const rootReducer = combineReducers({
    cards: cardsPoke,
    info: infoPoke
})