import React from 'react';
import { Link} from 'react-router-dom';
import '../../views/CourseView/CourseView.css';
import Logo from '../../../../assets/images/loginTitle.png';
import RocketIcon from '../../../../assets/icons/icon.png';
import SupportIcon from '../../../../assets/icons/supporticon.png';


const Drawer = props => {

    return (
      <div className="drawer flex column">
        <div className="drawer-title-img-cont-2">
          <Link to="/boost">
            <img className="drawer-title-img" src={Logo} alt="company logo" />
          </Link>
        </div>
        {/* <MobileHeader /> */}
        <Link to="/boost">
          <div className="drawer-item-cont">
            <img
              src={RocketIcon}
              srcSet={`
                ${require('../../../../assets/icons/icon@2x.png')} 2x,
                ${require('../../../../assets/icons/icon@3x.png')} 3x
              `}
              className="rocket-icon"
              alt="rocket icon"
            />
            
              <span className="drawer-item-text-boost">Boosts</span>
            
          </div>
        </Link>
        <div className="drawer-item-cont">
          <img
            src={SupportIcon}
            srcSet={`
              ${require('../../../../assets/icons/supporticon@2x.png')} 2x,
              ${require('../../../../assets/icons/supporticon@3x.png')} 3x
            `}
            className="support-icon"
            alt="support icon"
          />
          <span className="drawer-item-text-support">Support</span>
        </div>
        <div className="drawer-item-profile">
          <div className="drawer-item-profile-pic">
            <img className="drawer-item-profile-pic" src={props.user.picture} alt="your profile" />
          </div>
          <div className="drawer-item-inner-cont">
            <span className="drawer-item-profile-name">{props.user.givenName} {props.user.familyName}</span>
            <a style={{textDecoration: 'none'}} href="/api/logout"
  
              className="drawer-item-profile-exit"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default Drawer;