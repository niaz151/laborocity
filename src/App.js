import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import CategoryForm from './components/CategoryForm';
import {Router,Route,Switch, Bro} from 'react-router-dom';
import {createBrowserHistory} from 'history';


const Skills = () => {
  return(
    <div classname='app-container'>
      <Header/>
      <div className='d-flex flex-column align-items-center app-body'>
        <Tabs/>
        <Hero/>
        <CategoryForm/>
      </div>
    </div>
  )
}

const Equipment = () => {
  return(
    <div className='app-container'>
      <Header/>
    </div>
  )
}

const Certification = () => {
  return(
    <div className='app-container'>
      <Header/>
    </div>
  )
}

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Skills}/>
        <Route path="/equipment" component={Equipment} />
        <Route path="/certifications" component={Certification} />
      </Switch>
    </Router>
  );
}

export default App;
