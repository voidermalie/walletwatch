import './AddExpenseDisplay.css';
import Form from '../Form/Form';
import { useReducer } from 'react';
import formReducer, {initialState} from '../../reducer/formReducer';

const AddExpenseDisplay = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <section className='add-expense-display'>
      <h3>Add an Expense</h3>
      <Form state={state} dispatch={dispatch}/>
    </section>
  );
};

export default AddExpenseDisplay;
