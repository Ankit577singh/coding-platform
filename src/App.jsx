// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router';
// import HomePage from './pages/HomePage';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProblemSolvePage from './pages/ProblemSolvePage';

function App() {
  console.log("soidgb");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
         <Route path="/solve/:id" element={<ProblemSolvePage />} />
      </Routes>
    </Router>
  );
}

export default App;