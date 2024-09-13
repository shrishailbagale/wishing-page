import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WishingPage from './WishingPage';
import ResultPage from './ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wishing-page" element={<WishingPage />} />
        <Route path="/result/:name" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
