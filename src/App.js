import React,{useState} from 'react';
import './App.css';
import SubmissionSection from './components/SubmissionSection';
import Report from './components/Report';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import SignupShreya from './components/SignupShreya';
import LoginShreya from './components/LoginShreya';
import { BrowserRouter, Route, NavLink, Switch  } from "react-router-dom";
import Dashboard from './components/dashboard';


function App() {
 const [count, setCount] = useState(3);
 
  
  return (
    <div class="App">
    <Dashboard/>
    <Homepage/>
    <SubmissionSection setCount={setCount} count={count}/>
    <Report count={count}/> 
    <LoginShreya/>
    <SignupShreya/>

    </div>
  );
}

export default App;
