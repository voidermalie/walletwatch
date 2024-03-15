import './AddExpenseDisplay.css';
import Input from '../Input/Input';
import CategoryList from '../CategoryList/CategoryList';

const AddExpenseDisplay = () => {
  return (
    <section>
      <h3>Add an Expense</h3>
      <form>
        <div className="input">
          <Input />
          <CategoryList onSelect={() => {}}/>
        </div>
        <button type='submit'>Add</button>
      </form>
    </section>
  );
};

export default AddExpenseDisplay;
