import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Header from './Header';
import Tabs from './Tabs';
import Hero from './Hero';
import CategoryForm from './CategoryForm';


function App() {
  return (
    <div className='app-container'>
      <Header/>
      <div className='d-flex flex-column align-items-center app-body'>
        <Tabs/>
        <Hero/>
        <CategoryForm/>
      </div>
    </div>
  );
}

export default App;
