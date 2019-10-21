import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Switch from './components/Switch';
import './styles/CategoryForm.css';


class CategoryForm extends React.Component{


  render(){
    return(
      <form className='d-flex flex-column align-items-center justify-content-around category-form-container'>
        <div className='position-relative d-flex align-items-center category-form-row'>
          <label className='position-absolute ml-4 category-form-label'> Warehouse </label>
          <Field name='warehouse' component={Switch} />
        </div>
        <div className='position-relative d-flex align-items-center category-form-row'>
          <label className='position-absolute ml-4 category-form-label'> Hospitality </label>
          <Field name='hospitality' component={Switch} />
        </div>
        <div className='position-relative d-flex align-items-center category-form-row'>
          <label className='position-absolute ml-4 category-form-label'> General Labor </label>
          <Field name='general_labor' component={Switch} />
        </div>
        <div className='position-relative d-flex align-items-center category-form-row'>
          <label className='position-absolute ml-4 category-form-label'> Office </label>
          <Field name='office' component={Switch} />
        </div>
        <div className='position-relative d-flex align-items-center category-form-row'>
          <label className='position-absolute ml-4 category-form-label'> iRelaunch </label>
          <Field name='irelaunch' component={Switch} />
        </div>
      </form>
    )  
  } 
}



function mapStateToProps(state){
  var form = state.form
  return({
    form:form
  })
}


export default connect(mapStateToProps,null)(reduxForm({
  form:'category-form'
})(CategoryForm))