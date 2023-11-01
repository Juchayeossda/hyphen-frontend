import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HellogMain from "./components/Hellog/Main"
import HellogDetail from "./components/Hellog/Detail"
import HeaderLayout from './components/layout/HeaderLayout';
import WriteMain from './components/Hellog/Write/Main';
import WriteSubmit from './components/Hellog/Write/Submit';
import EnjoyDrawingMain from './components/EnjoyDrawing/Main';
import Main from './components/Main';
import EnjoyDrawingDetail from './components/EnjoyDrawing/Detail';
import PsyTest from './components/PsychologicalTest/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route element={<HeaderLayout/>}>
          <Route path='/' element={<Main/>} />
          
          <Route path='/hellog' element={<HellogMain/>} />
          <Route path='/hellog/detail/:id' element={<HellogDetail/>} />
          
          <Route path='/enjoydrawing' element={<EnjoyDrawingMain/>} />
          <Route path='/enjoydrawing/detail/:id' element={<EnjoyDrawingDetail/>} />
          
          <Route path='/psytest' element={<PsyTest/>} />
        </Route>
        <Route path='/hellog/write' element={<WriteMain/>} /> 
        <Route path='/hellog/write/submit' element={<WriteSubmit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
