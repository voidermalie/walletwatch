import './App.css';
import Header from './component/Header/Header';
import AddExpenseDisplay from './component/AddExpenseDisplay/AddExpenseDisplay';
import TrackerDisplay from './component/TrackerDisplay/TrackerDisplay';

function App() {
  return (
    <main id='app-container'>
      <header>
        <Header />
      </header>
      <AddExpenseDisplay />
      <TrackerDisplay />
    </main>
  );
}

export default App;
