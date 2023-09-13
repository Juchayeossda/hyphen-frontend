import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HellogMain from "./components/Hellog/Main"
import HellogDetail from "./components/Hellog/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/hellog/main' element={<HellogMain/>} />
        <Route path='/hellog/:id' element={<HellogDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
