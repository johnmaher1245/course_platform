import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

   
    render() {

       


        return (


        <div className="dashboard sidebar hide-on-small-only">

        <ul className="links" >
            <li className="logo">
                <Link to="/">Exron Music</Link>
            </li>
            <li className="break"style={{marginTop: '20px', borderTop: 'none'}} >
                Dashboard
            </li>
            
        
            <li>
                <Link to="/tables">
                    <span className="icon"><i className="material-icons">laptop</i></span>
                    Example Page
                </Link>
            </li>

            <li>
                <Link to="">
                    <span className="icon"><i className="material-icons">feedback</i></span>
                    Notifications
                </Link>
            </li>

            <li className="break" >
                Recent Activity
            </li>

            <li >
                <Link to="">
                    <span className="icon"><i className="material-icons">share</i></span>
                    Analytics
                </Link>
            </li>
            <li className="active">
                <Link to="">
                    <span className="icon"><i className="material-icons">whatshot</i></span>
                    Data
                </Link>
            </li>

            <li className="break">
                My Profile
            </li>

            <li>
            <Link to="">
                    <span className="icon"><i className="material-icons">people</i></span>
                    Contacts
            </Link>
            </li>


            <li >
                <Link to="">
                    <span className="icon"><i className="material-icons">person</i></span>
                    Account Settings
                </Link>
            </li>

            <li className="bottom">
                <Link to="">
                    <span className="icon"><i className="material-icons">info</i></span>
                    Support
                </Link>
            </li>
        </ul>


        </div>
           
        );
    }

}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);




