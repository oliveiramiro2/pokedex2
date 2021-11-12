const initialState = {
    info: ''
}

const infoPoke = (state=initialState.info, action) => {
    switch(action.type){
        case 'BUSCA_INFO':
            return { info: action.payload }
        default:
            return state
    }
}

export default infoPoke