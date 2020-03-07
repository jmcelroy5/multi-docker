import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FibCalculator from './FibCalculator.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={FibCalculator} />
      </div>
    </Router>
  );
}

export default App;
