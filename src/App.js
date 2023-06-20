import React, {useState, useEffect} from "react";
import './App.css';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import Loading from './components/Loading';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
setLoading(false)
  },2000)
}, [])
  return (
    <>
    {loading ? <Loading/> : <Router>
      <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/ProjectPage" element={<ProjectPage/>} />
      </Routes>
    </Router>}
     
    </>
  );
}

export default App;
