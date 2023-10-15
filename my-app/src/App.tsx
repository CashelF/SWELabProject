import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage'
import { Login } from '@mui/icons-material';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div style={{margin: 0, padding: 0}}>
      <LandingPage/>
    </div>
  );
}

export default App;
