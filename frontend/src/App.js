import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserStorage } from './UserContext';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
