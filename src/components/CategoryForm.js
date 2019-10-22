import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Switch from './Switch';
import '../styles/CategoryForm.css';




const customSwitch = () => (
  <Switch/>
)

const CategoryForm = (props) => {

  return(
    <form className='d-flex flex-column align-items-start justify-content-start category-form-container' onChange={onChange}>
      <div className='position-relative d-flex align-items-center category-form-row mt-3'>
        <label className='position-absolute ml-4 category-form-label'> Warehouse </label>
        <Field name='warehouse' value={false} component={(customSwitch)} />
      </div>
      <div className='position-relative d-flex align-items-center category-form-row mt-3'>
        <label className='position-absolute ml-4 category-form-label'> Hospitality </label>
        <Field name='hospitality' defaultValue={false} component={customSwitch} />
      </div>
      <div className='position-relative d-flex align-items-center category-form-row mt-3'>
        <label className='position-absolute ml-4 category-form-label'> General Labor </label>
        <Field name='general_labor' defaultValue={false} component={customSwitch} />
      </div>
      <div className='position-relative d-flex align-items-center category-form-row mt-3'>
        <label className='position-absolute ml-4 category-form-label'> Office </label>
        <Field name='office' defaultValue={false} component={customSwitch} />
      </div>
      <div className='position-relative d-flex align-items-center category-form-row mt-3'>
        <label className='position-absolute ml-4 category-form-label'> iRelaunch </label>
        <Field name='irelaunch' value={false} component={customSwitch} />
      </div>
    </form>
  )  
} 


function mapStateToProps(state){
  var form = state.form
  return({
    form:'category-form'
  })
}


export default connect(mapStateToProps,null)(reduxForm({
  form:'category-form'
})(CategoryForm))