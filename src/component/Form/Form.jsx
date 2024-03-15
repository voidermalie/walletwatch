import './Form.css';
import Input from '../Input/Input';
import CategoryList from '../CategoryList/CategoryList';
import formReducer, { initialState } from '../../reducer/formReducer';
import { useReducer } from 'react';

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSelect = (selectedValue) => {
    console.log('Selected value:', selectedValue);
    dispatch({
      type: 'SELECT_CATEGORY',
      payload: selectedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!')

    const { input, selectedCategory } = state;

    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        amount: input,
        category: selectedCategory
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <Input />
          <CategoryList
            onSelect={handleSelect}
            value={state.selectedCategory}
          />
        </div>
        <button type="submit" onClick={() => {}}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
