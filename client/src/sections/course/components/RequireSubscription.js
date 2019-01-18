import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

const RequireLogin = (props) => {

    if(!props.user.activeSubscription) {
        return <Redirect to="/payments"></Redirect>
    } else {
        return props.children;
    }

};

export default RequireLogin;
