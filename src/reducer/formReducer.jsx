export const initialState = {
    selectedCategory: '',
    expenseName: '',
    expenseAmount: '',
    expenses: [],
}


const formReducer = (state, action) => {
    const { name, amount, category } = action.payload;

    switch(action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload,
            }
        case 'SET_INPUT':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'ADD_EXPENSE':
            console.log('Expense added:', action.payload);
            return {
                ...state,
                expenses: [...state.expenses, {name, amount, category, id: Date.now()}],
                expenseName: '',
                expenseAmount: '',
            }
        default:
            return state;
    }
}

export default formReducer
