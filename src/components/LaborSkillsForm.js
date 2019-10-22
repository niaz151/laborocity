import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Switch from './Switch';
import '../styles/LaborSkillsForm.css';

class LaborSkillsForm extends React.Component{

  render(){

    const {handleSubmit} = this.props

    return(
      <form className='d-flex flex-column align-items-center justify-content-around labor-form-container' onSubmit={handleSubmit}>
        
        <div className='d-flex align-items-center labor-form-row '>
          <label className='position-absolute labor-form-label'> Construction </label>
          <Field name='construction' component={Switch} />
        </div>

        <div className='d-flex align-items-center labor-form-row'>
          <label className='position-absolute labor-form-label'> Restoration </label>
          <Field name='restoration' component={Switch} />
        </div>

        <div className='d-flex align-items-center labor-form-row '>
          <label className='position-absolute labor-form-label'> Painting </label>
          <Field name='painting' component={Switch} />
        </div>

        
      </form>
    )  
  } 
}


function mapStateToProps(state){
  var form = state.form
  return({
    form:'labor-form'
  })
}

export default connect(mapStateToProps,null)(reduxForm({
  form:'equipment-form',
  updateUnregisteredFields: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(LaborSkillsForm))