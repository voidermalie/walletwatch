export const initialState = {
    selectedCategory: '',
    input: '',
    expenses: [],
}


const formReducer = (state, action) => {
    const { amount, category } = action.payload;

    switch(action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload,
            }
        case 'SET_INPUT':
            return {
                ...state,
                input: action.payload
            }
        case 'ADD_EXPENSE':
            console.log('Expense added:', action.payload);
            return {
                ...state,
                expenses: [...state.expenses, {amount, category, id: Date.now()}],
                input: ''
            }
        default:
            return state;
    }
}

export default formReducer
