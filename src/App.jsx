import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HabitListPage from './pages/HabitListPage';
import CreateHabitPage from './pages/CreateHabitPage';
import HabitCard from './components/HabitCard';
import EditHabitPage from './pages/EditHabitPage';

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
        <Route path="/habits/:id" element={<HabitCard />} />
        <Route path="/habits/:id/edit" element={<EditHabitPage />} />
      </Routes>
    </Router>
  );
}

export default App
