import './App.css';
import Search from './components/Search.tsx';
import Res from './components/Res.tsx';

function App() {
  return (
    <>
      <div>
        <h3>RS - React - Task 1</h3>
        <Search />
      </div>
      <div className="card">
        <Res />
      </div>
    </>
  );
}

export default App;
