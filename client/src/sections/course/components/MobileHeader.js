import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../views/CourseView/CourseView.css';
import Logo from '../../../assets/images/loginTitle.png';
import RocketIcon from '../../../assets/icons/icon.png';
import SupportIcon from '../../../assets/icons/supporticon.png';

const profilePicOne =
  'https://images.unsplash.com/photo-1519488120670-9d0d7c133f9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';

class mobileHeader extends Component{

    state = {
        mobileMenuShow: false,
    }
    
    showMobileMenuHandler = () => {
        this.setState(prevState => {
          return {
            mobileMenuShow: !prevState.mobileMenuShow
          };
        });
      };

    render() {
        return (
            <div>
                <div className="mobile-view-header">
                    <div className="burger-icon" onClick={() => this.showMobileMenuHandler()}>
                    <div className="burger" />
                    <div className="burger" />
                    <div className="burger" /> 
                    <div
                        className={`${
                        this.state.mobileMenuShow ? 'mobile-view-menu-show' : 'mobile-view-menu'
                        }`}
                    >
                        <div className="drawer-item-cont-mobile">
                        <img
                            src={RocketIcon}
                            srcSet={`
                            ${require('../../../assets/icons/icon@2x.png')} 2x,
                            ${require('../../../assets/icons/icon@3x.png')} 3x
                            `}
                            className="rocket-icon"
                            alt="rocket icon"
                        />
                        <Link to="/boost">
                            <span className="drawer-item-text-boost">Boosts</span>
                        </Link>
                        </div>
                        <div className="drawer-item-cont-mobile">
                        <img
                            src={SupportIcon}
                            srcSet={`
                            ${require('../../../assets/icons/supporticon@2x.png')} 2x,
                            ${require('../../../assets/icons/supporticon@3x.png')} 3x
                            `}
                            className="support-icon"
                            alt="support icon"
                        />
                        <span className="drawer-item-text-support">Support</span>
                        </div>
                        <div className="drawer-item-profile-mobile">
                         <a href="/api/logout">
                            <div className="drawer-item-profile-pic">
                                <img className="drawer-item-profile-pic" src={this.props.user.picture} alt="profile icon" />
                            </div>
                        </a>
                        <a href="/api/logout">
                            <div className="drawer-item-inner-cont-mobile">
                                <span className="drawer-item-profile-name-mobile">
                                {/* {props.user.givenName} */}
                                </span>
                            
                                    <span
                                    className="drawer-item-profile-exit"
                                    >
                                    Logout
                                    </span>
                                
                            </div>
                            </a>
                        
                        </div>
                    </div>
                </div>
                <div className="mobile-view-title">
                    <img src={Logo} alt="company logo"/>
                </div>
            </div>
            {(this.props.titleText) ? (
                <div className="mobile-view-header-text">
                    <span className="mobile-view-boost-title">{this.props.titleText}</span>
                </div>
            ): ''}
           
        </div>
        )
    }

} 

export default mobileHeader;