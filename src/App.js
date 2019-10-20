import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './styles/App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <div className='app-body'>
        <Tabs/>
        <img src={require('./images/person.svg')} />
      </div>
    </div>
  );
}

export default App;
