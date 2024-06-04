import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null); // Ensure this state is correctly initialized

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={setUser} />} />
        <Route path="/" element={user ? <Home user={user} /> : <LoginForm onLogin={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
