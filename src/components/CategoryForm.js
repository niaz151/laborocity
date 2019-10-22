import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Switch from './Switch';
import '../styles/CategoryForm.css';


const handleSwitch = () => {

}

class CategoryForm extends React.Component{

  render(){
    return(
      <div className='d-flex flex-column align-items-start justify-content-start category-form-container'>
        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <div className='position-absolute ml-4 category-form-label'> Warehouse </div>
          <Switch category='warehouse'/>
        </div>
        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <div className='position-absolute ml-4 category-form-label'> Hospitality </div>
          <Switch category='hospitality'/>
        </div>
        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <div className='position-absolute ml-4 category-form-label'> General Labor </div>
          <Switch category='general_labor'/>
        </div>
        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <div className='position-absolute ml-4 category-form-label'> Office </div>
          <Switch category='office'/>
        </div>
        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <div className='position-absolute ml-4 category-form-label'> iRelaunch </div>
          <Switch category='iRelaunch'/>
        </div>
      </div>
    )     
  }
} 


export default CategoryForm