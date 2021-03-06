import React , { Component } from 'react';
import './CourseView.css';

import DashboardWrapper from '../../components/DashboardWrapper';
import Loader from '../../components/Loader';
import RequireLogin from '../../components/RequireLogin';
import RequireSubscription from '../../components/RequireSubscription';
import Axios from 'axios';

import CourseCard from '../../components/Courses/CourseCard';
// import CheckoutForm from '../../components/Stripe/CheckoutForm';


import { MobileHeader } from '../../components';
// import {Elements, StripeProvider} from 'react-stripe-elements';



const MainFrame = props => {
  
  //return the cards to show on pate
  const courseCards = () => {

    const cards = props.courses.map(function(data) { 
      
      return <CourseCard
      link={"/boost/" + data._id + "/" + data.name + '/1'} 
        key={data._id}
        courseId={data._id}
        picture={data.picture}
        authorPicture={data.authorPicture}
        name={data.name}
        time={data.time}
      />


    });

    return cards
  
    
  }
  
  return (
    <div className="main-frame-cont">

      <div className="main-frame-header">
        <span className="main-frame-header-text">Boosts</span>
      </div>
      <MobileHeader user={props.user} titleText="Boosts" />
      <div className="main-frame-grid-cont">
        {courseCards()}
      </div>
    </div>
  );
};

class CourseView extends Component { 

  state = {
    courses: [],
    loaded: false
  }
  
  //fire when component mounts
  async componentDidMount() {
    
    //make request for all courses
    const courses = await Axios.get('/api/courses');
    
    this.setState({
      courses: courses.data.data,
      loaded: true
    })
    
  }

  render() {

    return (

      
      <RequireLogin user={this.props.user} loggedIn={this.props.loggedIn}>

        <RequireSubscription user={this.props.user}>

        {(!this.state.loaded) ? <Loader></Loader> : ''}
        
        <DashboardWrapper user={this.props.user}>
            <MainFrame user={this.props.user} courses={this.state.courses} loaded={this.state.loaded} />
        </DashboardWrapper>


        </RequireSubscription>
       
      </RequireLogin>
    )
  }
}

export default CourseView;
