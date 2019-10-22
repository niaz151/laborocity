import React from 'react';
import '../styles/Slider.css';

class Slider extends React.Component{

  render(){

    const {input: {value,onChange}} = this.props


    return(
      <label className="slidecontainer">
        <input type="range" className="custom-range"  onClick={ () => onChange(value)} />
      </label>
    )
  }
}

export default Slider;