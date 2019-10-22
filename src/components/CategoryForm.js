import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Switch from './Switch';
import '../styles/CategoryForm.css';
import LaborSkillsForm from './LaborSkillsForm';
class CategoryForm extends React.Component{

  
  render(){
    
    const {handleSubmit} = this.props

    return(
      <form className='d-flex flex-column align-items-start justify-content-start category-form-container' onSubmit={handleSubmit}>
        
        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <label className='position-absolute ml-4 category-form-label'> Warehouse </label>
          <Field name='warehouse' component={Switch} />
        </div>

        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <label className='position-absolute ml-4 category-form-label'> Hospitality </label>
          <Field name='hospitality' component={Switch} />
        </div>

        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <label className='position-absolute ml-4 category-form-label'> General Labor </label>
          <Field name='general_labor' component={Switch} />
        </div>

        <LaborSkillsForm/>

        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <label className='position-absolute ml-4 category-form-label'> Office </label>
          <Field name='office' component={Switch} />
        </div>

        <div className='position-relative d-flex align-items-center category-form-row mt-3'>
          <label className='position-absolute ml-4 category-form-label'> iRelaunch </label>
          <Field name='irelaunch' component={Switch} />
        </div>
      </form>
    )
  } 
} 


export default (reduxForm({
  form:'category-form',
  updateUnregisteredFields: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(CategoryForm))