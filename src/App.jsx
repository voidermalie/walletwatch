import './App.css';
import Header from './component/Header/Header';
import AddExpenseDisplay from './component/AddExpenseDisplay/AddExpenseDisplay';
import TrackerDisplay from './component/TrackerDisplay/TrackerDisplay';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main id="app-container">
        <AddExpenseDisplay />
        <TrackerDisplay />
      </main>
    </>
  );
}

export default App;
