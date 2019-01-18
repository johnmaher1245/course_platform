import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Payments from './Payments';

import profilePic from '../../assets/img/marc.jpg';


class Header extends Component {

    renderContent() {
        //this.props.auth is equal to the user or req.user
        switch(this.props.auth) {

            //dont know what to do yet dont show any content
            case null:
                return;

            //user is logged out
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );

            //user logged in
            default:
                return this.props.auth.givenName;


        }
    }

    render() {


        console.log(this.renderContent());
        

       


        return (
            <nav className="dashboard nav ">
                <div className="nav-wrapper ">
                    <img className="img-profile" src={profilePic} alt=""></img>
                    <span className="img-profile-text">Welcome John!</span>
            
                    <ul id="nav-mobile" className="right hide-on-small-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                        <li><a className="btn btn-floating btn-success pulse"><i className="material-icons">notifications</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }

}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);


