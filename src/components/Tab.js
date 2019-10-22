import React from 'react';
import {Link} from 'react-router-dom';
import Skills from '../Skills';
import Equipment from '../Equipment';
import Certifications from '../Certifications';

class Tab extends React.Component{

  render(){
    return(
      <Link 
        className='d-flex align-items-center justify-content-center tab'
        to={this.props.name.toLowerCase()}
      >
        {this.props.name}
      </Link>
    )
  }
}

export default Tab