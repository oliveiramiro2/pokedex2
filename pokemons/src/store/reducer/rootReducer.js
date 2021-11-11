import { combineReducers } from "redux"

import cardsPoke from './cardsR'

export const rootReducer = combineReducers({
    cards: cardsPoke
})