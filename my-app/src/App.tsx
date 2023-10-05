import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage'
import { Login } from '@mui/icons-material';
import Hero from './Components/Hero';

function App() {
  return (
    <div style={{margin: 0, padding: 0}}>
      <Hero/>
    </div>
  );
}

export default App;
