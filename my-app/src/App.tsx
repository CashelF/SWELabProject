import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage'
import { Login } from '@mui/icons-material';
import LandingPage from './Pages/LandingPage';
import ProjectsPage from './Pages/ProjectsPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

{/* <div style={{margin: 0, padding: 0}}>
      <LandingPage/>
</div> */}

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="homepage" element={ <LandingPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
