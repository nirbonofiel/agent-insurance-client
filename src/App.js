import React from 'react';
import './App.scss';
import Home from './containers/home/Home'
import Switch from 'react-bootstrap/esm/Switch';
import { Route, Redirect} from 'react-router-dom';
import Agent from './components/agent/Agent';
import Insurance from './components/insurance/Insurace';
import AgentInsurance from './components/agentInsurance/AgentInsurance'

function App() {

  return (
    <div className="App">
      <Home>
        <Switch>
          <Route path='/insuranceForAgent' component={AgentInsurance} />
          <Route path='/agent' component={Agent}/>
          <Route path='/insurance' component={Insurance} />
          <Redirect exact from={'/'} to={'/insuranceForAgent'} />
        </Switch>
      </Home>
    </div>
  );
}

export default App;
