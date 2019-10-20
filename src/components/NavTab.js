import React from 'react';

class NavTab extends React.Component{

  render(){
    return(
      <div className='d-flex align-items-center justify-content-center tab'>
        {this.props.name}
      </div>
    )
  }
}

export default NavTab