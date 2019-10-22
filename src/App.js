import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Route,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Skills from './Skills';
import Equipment from './Equipment';
import Certifications from './Certifications';


function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Skills}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/equipment" component={Equipment} />
        <Route path="/certifications" component={Certifications} />
      </Switch>
    </Router>
  );
}

export default App;
