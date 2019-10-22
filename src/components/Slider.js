import React from 'react';
import '../styles/Slider.css';

class Slider extends React.Component{

  render(){

    const {input: {value,onChange}} = this.props

    return(
      <div className="slidecontainer">
        <input type="range" min="1" max="100" className='custom-range'/>
      </div>
    )
  }
}

export default Slider;