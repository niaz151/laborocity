import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Slider from './Slider';
import '../styles/LaborSkillsForm.css';

class LaborSkillsForm extends React.Component{

  render(){

    const {handleSubmit} = this.props

    return(
      <form className='d-flex flex-column labor-form-container' onSubmit={handleSubmit}>
        
        <div className='d-flex flex-row align-items-center justify-content-center labor-form-row'>
          <div className='d-flex align-items-center position-absolute labor-form-top-container'>
            <div className='position-absolute labor-form-label ml-4 '> Steel Toed Boots</div>
            <div className='position-absolute labor-form-val mr-4'> My Experience </div>
          </div>
          <div className='d-flex align-items-center justify-content-center labor-form-bottom-container'>
            <Field name='steel_toed_boots' component={Slider} />     
          </div>
        </div>

 

      </form>
    )  
  } 
}


function mapStateToProps(state){
  var form = state.form
  return({
    form:'labor-skills-form'
  })
}

export default connect(mapStateToProps,null)(reduxForm({
  form:'equipment-form',
  updateUnregisteredFields: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(LaborSkillsForm))