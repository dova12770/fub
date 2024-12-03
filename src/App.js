import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  //return <SignupPage />;

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
