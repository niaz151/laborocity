import React from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import {connect} from 'react-redux';
import './styles/Equipment.css';


class Equipment extends React.Component{
  
  checkSkills(){
    var user_data = this.props.user_data
    var skills = user_data.skills
    var bool = null

    // IF SKILLS OBJECT IS EMPTY / ELSE
    Object.keys(skills).length === 0 ? bool = true : bool = false
    return bool
  }

  noSkillsWarning = () => (
    <div className='d-flex flex-column align-items-center justify-content-center error-container'>
      <div className='d-flex align-items-center justify-content-center mt-4 error_msg error_msg_one'>
        You currently have on skills <br/>
        to add equipment under.
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4 error_msg error_msg_two'>
        Please go back to the Skills tab <br/>
        to add some of your skills <br/>
        and interests
      </div>
    </div>
  )

  render(){

    if(this.checkSkills()){
      return(
        <>
        <Header/>
        <NavTabs active='equipment' />
        <div className='d-flex flex-column align-items-center equipment-background'>
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
        <div className='d-flex flex-column align-items-center equipment-background'>
          test
        </div>
        </>
      )
    }
    
  }
}

function mapStateToProps(state){
  var user_data = state.user
  return({
    user_data:user_data
  })
}

export default connect(mapStateToProps,null)(Equipment);