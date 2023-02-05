import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../src/pages/homePage.components.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' element={<HomePage/>} />
      </Switch>
    </div>
  );
}

export default App;