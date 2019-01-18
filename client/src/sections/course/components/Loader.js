import React, { Component } from 'react';
import Logo from '../../../assets/images/loginTitle.png';

class Loader extends Component  {

 render() {
    
    //   const { loadingCircle } = props;
    return (
      <div className="flex column justify-center align-center w-100 h-100">
        <img style={{marginBottom: '20px'}}  src={Logo} alt="loader"/>
        <div className='loader'></div>
      </div>
    ) 
  
  }
}

export default Loader;
