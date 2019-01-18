/*********************************************
** responsible for initial view layer setup **
/*********************************************/

import React, { Component } from 'react';
import Axios from 'axios';
import AuxWrapper from './hoc/AuxWrapper'

import {Elements, StripeProvider} from 'react-stripe-elements';


/* *********************************************
Browser Router tells react how to behave and
changes the components bases on the url

Browser Router expecets only 1 child div
**********************************************/

/**********************************************
Route is a react component that is used to 
set up a rule between a certain route and the 
set of components visible on the screen
**********************************************/

import { BrowserRouter, Route } from 'react-router-dom';



// import dashboardHome from './sections/dashboard/pages/Home';
// import dashboardTables from './sections/dashboard/pages/Tables';

// import dashboardDb from './sections/dev/pages/DBDevelopment';

import SocialAuth from './sections/course/views/SocialAuth';
// import AuthenticatedView from './sections/course/views/AuthenticatedView';
import CourseView from './sections/course/views/CourseView';
import LessonView from './sections/course/views/LessonView';
import Payments from './sections/course/views/Payments/Payments';



class App extends Component { 

    state = {
        user: 'unknown',
        loggedIn: 'unknown'
    };

     
    
      //at this point we should be logged in so get the user
      async componentDidMount() {
        const user = await Axios.get('/api/current_user');

        if(user.data) {
            this.setState({ 
                user: user.data,
                loggedIn: true 
            });
        } else {
            this.setState({ 
                user: null,
                loggedIn: null 
            });
        }

        
      }
    
    render() {
        
        
        return (
            <BrowserRouter>
               

                <AuxWrapper>
                    <Route  path="/" render={(props) => <SocialAuth {...props} />} />
                   <Route exact  path="/boost"  render={(props) => <CourseView {...props} loggedIn={this.state.loggedIn} user={this.state.user}  />} />
                    <Route exact path="/boost/:courseId/:courseName/:lessonNumber" render={(props) => <LessonView {...props} loggedIn={this.state.loggedIn} user={this.state.user}  />} />
                    <Route exact path="/social-auth" render={(props) => <SocialAuth {...props} loggedIn={this.state.loggedIn} user={this.state.user} />} />
                    <Route exact path="/payments" render={(props) => <Payments {...props} loggedIn={this.state.loggedIn} user={this.state.user} />} />
                   </AuxWrapper>
               


                   {/* <AuxWrapper>
                   <Route exact  path="/boost"  render={(props) => <CourseView {...props} loggedIn={this.state.loggedIn} user={this.state.user}  />} />
                    <Route exact path="/boost/:courseId/:courseName/:lessonNumber" render={(props) => <LessonView {...props} loggedIn={this.state.loggedIn} user={this.state.user}  />} />
                    <Route exact path="/social-auth" render={(props) => <SocialAuth {...props} loggedIn={this.state.loggedIn} user={this.state.user} />} />
                   </AuxWrapper> */}
                    
            </BrowserRouter>
        );
    }

};

//connect, first argument is mapStateToProps, seconds is actions
// export default connect(null, actions)(App);
export default App;