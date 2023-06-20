import React from "react";

import './App.css';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/ProjectPage" element={<ProjectPage />} />
          <Route exact path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
