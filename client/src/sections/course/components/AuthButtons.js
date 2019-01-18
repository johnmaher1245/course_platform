import React from 'react';
import facebookIcon from '../../../assets/icons/facebook.png'
import googleIcon from '../../../assets/icons/google.png'
const AuthButton = props => {
  const { google } = props;
  return google ? (
    <a href="/auth/google" className="relative google-button flex row align-center" style={{justifyContent: 'center', textDecoration: 'none'}} >
     <img style={{left: '16px'}} className='absolute' src={googleIcon} alt="google logo"></img><span >Login with Google</span>
    </a>
  ) : (
    <a  href="/auth/facebook" className="relative facebook-button flex row align-center"  style={{justifyContent: 'center', textDecoration: 'none'}}>
      <img style={{left: '16px'}} className='absolute' src={facebookIcon} alt="facebook logo"></img><span >Login with Facebook</span>
    </a>
  );
};

export default AuthButton;

