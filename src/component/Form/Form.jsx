import './Form.css';
import Input from '../Input/Input';
import CategoryList from '../CategoryList/CategoryList';
//import formReducer, { initialState } from '../../reducer/formReducer';
//import { useReducer } from 'react';
import { useFormContext } from '../../context/formContext';

const Form = () => {

    //const [state, dispatch] = useReducer(formReducer, initialState);
    const { state, dispatch } = useFormContext();

    const handleInputChange = (e) => {
      dispatch({
        type: 'SET_INPUT',
        payload: {
          name: e.target.name,
          value: e.target.value,
        },
      });
    };
  
    const handleSelect = (selectedValue) => {
      dispatch({
        type: 'SELECT_CATEGORY',
        payload: selectedValue,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted!');
  
      const { expenseName, expenseAmount, selectedCategory } = state;
  
      dispatch({
        type: 'ADD_EXPENSE',
        payload: {
          name: expenseName,
          amount: expenseAmount,
          category: selectedCategory,
        },
      });
    };

  return (
    <div className="formDisplay">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <Input
            name="expenseName"
            placeholder='What'
            inputValue={state.expenseName}
            handleInputChange={handleInputChange}
          />
          <Input
            name="expenseAmount"
            placeholder='How much'
            inputValue={state.expenseAmount}
            handleInputChange={handleInputChange}
            size='10'
          />
          <CategoryList
            onSelect={handleSelect}
            value={state.selectedCategory}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
