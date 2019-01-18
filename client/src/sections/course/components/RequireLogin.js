import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class RequireLogin extends Component {


    requireLogin () {
        
    
        if(this.props.loggedIn === 'unknown') {

            //user not yet know do nothing on the page
            //show loader if we dont know what to do
            // return <Loader></Loader>;
            return '';

        } else if (!this.props.loggedIn) {

            //user found to not be logged in redirect them to login
            return <Redirect to="/social-auth" />

        } else {
            //user found and verified display the page
            return this.props.children

        }
    
    
      }


      render() {

        return (
            <div>{this.requireLogin()}</div>
        )

      }

}

export default RequireLogin;