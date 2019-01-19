import React , { Component } from 'react';
import '../../CourseView/CourseView.css';

import DashboardWrapper from '../../../components/DashboardWrapper';
import Loader from '../../../components/Loader';
import RequireLogin from '../../../components/RequireLogin';
import RequireSubscription from '../../../components/RequireSubscription';
import Axios from 'axios';

import CourseCard from '../../../components/Courses/CourseCard';
// import CheckoutForm from '../../../components/Stripe/CheckoutForm';


import { MobileHeader } from '../../../components';
// import {Elements, StripeProvider} from 'react-stripe-elements';



const MainFrame = props => {
  
    console.log(props);
    
  //return the cards to show on pate
  const courseCards = () => {

    const cards = props.lessons.map(function(data) { 
      
      return <CourseCard
        link={"/admin/lesson/select/" + data._id}
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
        <span className="main-frame-header-text">{props.title}</span>
      </div>
      <MobileHeader user={props.user} titleText="Boosts" />
      <div className="main-frame-grid-cont">
        {courseCards()}
      </div>
    </div>
  );
};

class AdminLessonSelect extends Component { 

 //set initial state to null properties
 state = {
    lessons: [],

  }


  async setLessonState(lessonNumber) {

    //get course id from params
    const courseId = this.props.match.params.courseId
    console.log(courseId);
    //make request for lessons
    let lessons = await Axios.get('/api/courses/');
    //filter our response to just the courses
    lessons = lessons.data.data

    console.log(lessons);
    


    //get total lesson length
    const totalLessons = lessons.length

    this.setState({
      lessons,
      totalLessons
    })

  }

  //run lesson request when component mounts
  async componentDidMount() {
      
      this.setLessonState(this.props.match.params.lessonNumber);
  }

  render() {

    return (

      
      <RequireLogin user={this.props.user} loggedIn={this.props.loggedIn}>

        <RequireSubscription user={this.props.user}>

        {/* {(!this.state.loaded) ? <Loader></Loader> : ''} */}
        
        <DashboardWrapper user={this.props.user}>
            <MainFrame title="Select Course" user={this.props.user} lessons={this.state.lessons} loaded={this.state.loaded} />
        </DashboardWrapper>


        </RequireSubscription>
       
      </RequireLogin>
    )
  }
}

export default AdminLessonSelect;
