import React from 'react';
import {Link} from 'react-router-dom';

class Tab extends React.Component{

  render(){

    /* IF ACTIVE TAB  */
    if(this.props.active){
      return(
        <Link 
          className='d-flex align-items-center justify-content-center tab tab-active'
          to={this.props.name.toLowerCase()}
          style={{textDecoration:'none'}}
        >
          {this.props.name}
        </Link>
      )
    }
    else{
      return(
        <Link 
          className='d-flex align-items-center justify-content-center tab'
          to={this.props.name.toLowerCase()}
          style={{textDecoration:'none'}}
        >
          {this.props.name}
        </Link>
      )
    }
  }
}

export default Tab