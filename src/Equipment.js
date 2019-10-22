import React from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import {connect} from 'react-redux';
import './styles/Equipment.css';
import EquipmentForm from './components/EquipmentForm';

class Equipment extends React.Component{
  
  /* CHECK FOR SKILLS WITHIN THE STORE */
  hasSkills(){
    var user_data = this.props.user_data.user
    var skills = user_data.skills
    var bool = null

    // IF SKILLS OBJECT IS EMPTY / ELSE
    Object.keys(skills).length === 0 ? bool = true : bool = false
    return bool
  }

  /* ERROR MSG IF NO SKILLS WITHIN STORE */
  noSkillsWarning = () => (
    <div className='d-flex flex-column align-items-center justify-content-center error-container'>
      <div className='d-flex align-items-center justify-content-center mt-4 error-msg'>
        You currently have on skills <br/>
        to add equipment under.
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4 error-msg'>
        Please go back to the Skills tab <br/>
        to add some of your skills <br/>
        and interests
      </div>
    </div>
  )

  render(){

    if(this.hasSkills()){
      return(
        <>
        <Header/>
        <NavTabs active='equipment' />
        <div className='d-flex flex-column align-items-center equipment-container'>
          {this.noSkillsWarning()}
        </div>
        </>
      )
    }

    else{
      return(
        <>
        <Header/>
        <NavTabs active='equipment' />
        <div className='position-relative d-flex flex-column align-items-center equipment-container'>
          <div className='position-absolute success-msg'>
            Do you have the following equipment <br/>
            for your selections?
          </div>
          <div className='d-flex align-items-center pl-4 position-absolute equipment-category'>
            General Labor Items
          </div>
          <EquipmentForm/>
        </div>
        </>
      )
    }
  }
}

/* CONNECT THIS COMPONENT TO THE STORE/STATE VIA PROPS */
function mapStateToProps(state){
  var user_data = state.user
  return({
    user_data:user_data
  })
}

export default connect(mapStateToProps,null)(Equipment);