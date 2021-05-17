import React,{useState} from 'react';
import './App.css';
import SubmissionSection from './components/SubmissionSection';
import Report from './components/Report';
import Homepage from './components/Homepage';
import SignupShreya from './components/SignupShreya';
import LoginShreya from './components/LoginShreya';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from './components/dashboard';
import PlanningSection from './components/planning' 


function App() {
 const [count, setCount] = useState(3);
 
  
  return (
    <div class="App">
    <Router>
      <Dashboard/>
      <Switch>
        <Route path="/report" exact component={Report} count={count} />
        <Route path="/signup" exact component={SignupShreya} />
        <Route path="/login" exact component={LoginShreya} />
        <Route path="/submission" exact component={SubmissionSection} setCount={setCount} count={count} />
        <Route path="/planning" exact component={PlanningSection} />
        <Route path="/" exact component={Homepage} />
        <Route render={() => <h1>Error! 404, Not found</h1>}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
