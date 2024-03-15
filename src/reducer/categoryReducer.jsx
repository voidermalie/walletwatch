export const initialState = {
    selectedCategory: ''
}


const categoryReducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer
