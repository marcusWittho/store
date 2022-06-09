import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserStorage } from './UserContext';

import Home from './components/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </main>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
