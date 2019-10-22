import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Switch from './Switch';
import '../styles/EquipmentForm.css';

class EquipmentForm extends React.Component{

  render(){
    return(
      <form className='d-flex flex-column align-items-center justify-content-around equipment-form-container'>
        
        <div className='d-flex align-items-center equipment-form-row  equipment-form-row-alt'>
          <label className='position-absolute ml-4 equipment-form-label '> Steel Toed Boots</label>
          <Field name='steel_toed_boots' component={Switch} />
        </div>

        <div className='d-flex align-items-center equipment-form-row'>
          <label className='position-absolute ml-4 equipment-form-label'> Hard Hat </label>
          <Field name='hard_hat' component={Switch} />
        </div>

        <div className='d-flex align-items-center equipment-form-row  equipment-form-row-alt'>
          <label className='position-absolute ml-4 equipment-form-label'> Safety Vest </label>
          <Field name='safety_vest' component={Switch} />
        </div>

        <div className='d-flex align-items-center equipment-form-row'>
          <label className='position-absolute ml-4 equipment-form-label'> Eye Protection </label>
          <Field name='eye_protection' component={Switch} />
        </div>

        <div className='d-flex align-items-center equipment-form-row  equipment-form-row-alt'>
          <label className='position-absolute ml-4 equipment-form-label'> Gloves </label>
          <Field name='gloves' component={Switch} />
        </div>
        
      </form>
    )  
  } 
}


function mapStateToProps(state){
  var form = state.form
  return({
    form:'equipment-form'
  })
}

export default connect(mapStateToProps,null)(reduxForm({
  form:'category-form'
})(EquipmentForm))