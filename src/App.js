import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Ponds from './components/Ponds';
import PondDetail from './components/PondDetail';
import DissolvedOxygen from './components/DissolvedOxygen';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ponds" element={<Ponds />} />
          <Route path="/ponds/:pondId" element={<PondDetail />} />
          <Route path="/dissolvedoxygen" element={<DissolvedOxygen />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
