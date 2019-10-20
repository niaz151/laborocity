import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Header from './Header';
import Tabs from './Tabs';
import Hero from './Hero';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <div className='app-body'>
        <Tabs/>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
