import React from 'react';
import '../styles/Switch.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchCategoryForm} from '../redux/actions/index.js';


class Switch extends React.Component{
  
  handleSwitch = () => {
    var data = this.props.data
    var category = this.props.category
    var old_bool = data[this.props.category]
    this.props.switch(category,old_bool)
  }
  
  render(){
    
    return(
      <label className='switch mr-4' onChange={ ()=>this.handleSwitch() } >
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
    )
  }
}

function mapStateToProps(state){
  var data = state.categoryForm
  return({
    data:data
  }) 
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switch: switchCategoryForm}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Switch);