import './Expense.css';
import { useFormContext } from '../../context/formContext';

const Expense = ({ name, amount, category }) => {
  const { state } = useFormContext();
  return (
    <article>
      <p>{name}</p>
      <p>{amount}</p>
      <p>{category}</p>
    </article>
  );
};

export default Expense;
