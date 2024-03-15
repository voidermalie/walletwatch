import './ExpenseList.css';
import Expense from '../Expense/Expense';
import { useFormContext } from '../../context/formContext';

const ExpenseList = () => {
    const { state } = useFormContext();
    
    return (
        <div className='expense-list'>
            {state.expenses.map((expense, id) => (
                <Expense
                    key={id}
                    name={expense.name}
                    amount={expense.amount}
                    category={expense.category}
                />
            ))}
        </div>
    );
};

export default ExpenseList;
