import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HellogMain from "./components/Hellog/Main"
import HellogDetail from "./components/Hellog/Detail"
import HellogHeaderLayout from './components/layout/HellogHeaderLayout';
import WriteMain from './components/Hellog/Write/Main';
import WriteSubmit from './components/Hellog/Write/Submit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route element={<HellogHeaderLayout/>}>
          <Route path='/hellog' element={<HellogMain/>} />
          <Route path='/hellog/detail/:id' element={<HellogDetail/>} />
        </Route>
        <Route path='/hellog/write' element={<WriteMain/>} /> 
        <Route path='/hellog/write/submit' element={<WriteSubmit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
