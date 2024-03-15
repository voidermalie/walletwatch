import './TrackerDisplay.css';
import CategoryList from '../CategoryList/CategoryList';
import ExpenseList from '../ExpenseList/ExpenseList';
import { useFormContext } from '../../context/formContext';

const calculateTotal = (expenses) => {
  return expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );
};

const TrackerDisplay = () => {
  const { state } = useFormContext();

  return (
    <section>
      <h3>Tracker</h3>
      <article className="tracker-total-amount">
        <h4>
          You have spent a total of {calculateTotal(state.expenses)}€ this month
          !
        </h4>
      </article>
      <article className="tracker-categories">
        <h4>Expenses by category</h4>
        <CategoryList value="" />
      </article>
      <article className="tracker-all-expenses">
        <h4>All expenses</h4>
        <ExpenseList expenses={state.expenses} />
      </article>
    </section>
  );
};

export default TrackerDisplay;
