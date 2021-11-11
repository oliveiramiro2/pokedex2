const initialState = {
    cards: ''
}

const cardsPoke = (state=initialState.cards, action) => {
    switch(action.type){
        case "TROCA_CARDS":
            return { cards: action.payload }
        default:
            return state
    }
}

export default cardsPoke