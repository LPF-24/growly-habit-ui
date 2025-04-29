import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HabitListPage from './pages/HabitListPage';
import CreateHabitPage from './pages/CreateHabitPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Habits</Link></li>
          <li><Link to="/create">Create Habit</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HabitListPage />} />
        <Route path="/create" element={<CreateHabitPage />} />
      </Routes>
    </Router>
  );
}

export default App
