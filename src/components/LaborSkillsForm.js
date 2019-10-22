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
            <div className='position-absolute labor-form-label ml-4 '> Construction</div>
            <div className='position-absolute labor-form-val mr-4'> My Experience:  </div>
          </div>
          <div className='d-flex align-items-center justify-content-center labor-form-bottom-container'>
            <Field name='construction' component={Slider} />     
          </div>
        </div>

        <div className='d-flex flex-row align-items-center justify-content-center labor-form-row'>
          <div className='d-flex align-items-center position-absolute labor-form-top-container'>
            <div className='position-absolute labor-form-label ml-4 '> Restoration</div>
            <div className='position-absolute labor-form-val mr-4'> My Experience:  </div>
          </div>
          <div className='d-flex align-items-center justify-content-center labor-form-bottom-container'>
            <Field name='restoration' component={Slider} />     
          </div>
        </div>

        <div className='d-flex flex-row align-items-center justify-content-center labor-form-row'>
          <div className='d-flex align-items-center position-absolute labor-form-top-container'>
            <div className='position-absolute labor-form-label ml-4 '> Painting</div>
            <div className='position-absolute labor-form-val mr-4'> My Experience:  </div>
          </div>
          <div className='d-flex align-items-center justify-content-center labor-form-bottom-container'>
            <Field name='painting' component={Slider} />     
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