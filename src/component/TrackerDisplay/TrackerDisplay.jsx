import './TrackerDisplay.css';
import CategoryList from '../CategoryList/CategoryList';

const TrackerDisplay = () => {
  return (
    <section>
      <h3>Tracker</h3>
      <article className="tracker-total-amount">
        <h4>You have spent a total of 666€ this month !</h4>
      </article>
      <article className='tracker-categories'>
        <h4>Expenses by category</h4>
        <CategoryList value=''/>
      </article>
      <article className='tracker-all-expenses'>
        <h4>All expenses</h4>
      </article>
    </section>
  );
};

export default TrackerDisplay;
