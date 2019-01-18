import React from 'react';
import './LessonView.css';
import {Link} from 'react-router-dom'

import Axios from 'axios';


import AuxWrapper from '../../../../hoc/AuxWrapper';
import Drawer from '../../components/Drawer/Drawer';
import ReactPlayer from 'react-player';
import RequireLogin from '../../components/RequireLogin';
import { MobileHeader } from '../../components';


const AllLessons = (props) => {
  return props.allLessons.map(lesson => {
    return (
      <div key={lesson.name} className="main-frame-boost-lesson flex row align-center">
        <Link to={"/boost/" + lesson.courseId + "/" + props.courseName + "/" + lesson.lessonNumber}>
          <img src={lesson.videoThumbnail} className="main-fram-boost-lesson-img" alt="video thumbnail" />
        </Link>
        <div className="flex column">
          <p className="main-fram-boost-lesson-title margin-0">
            {lesson.name}
          </p>
          <p className="main-fram-boost-lesson-lesson-num margin-0">
            Lesson {lesson.lessonNumber}
          </p>
        </div>
      </div>
    );
  })
}


const MainLesson = (props) => {
  


  return (
    <AuxWrapper>
      <div className="main-lesson-company-title-container flex column justify-center">
        <span className="main-lesson-company-title">{props.courseName}</span>
      </div>
      <div className="mainframe-boost-banner">
        <ReactPlayer
          width="100%"
          height="100%"
          className="mainframe-banner"
          url={props.currentLesson.video}
          playing
        />
      </div>
      <div className="flex column main-lesson-desc ">
        <div>
          <span className="main-lesson-title">{props.currentLesson.name}</span>
        </div>
        <div className="flex row main-lesson-info">
          <div className="main-lesson-count">
            <span>
              {props.currentLesson.lessonNumber} <span style={{ color: '#778087' }}>of {props.totalLessons}</span>
            </span>
          </div>
          <div className="main-lesson-time">
            <span>4:34</span>
          </div>
          <div className="main-lesson-company">
            <span>{props.courseName}</span>
          </div>
        </div>
        <div className="main-lesson-course-desc">
          <span className="course-desc-string">
          {props.currentLesson.description}
          </span>
        </div>
        <button className="main-fram-boost-lesson-button ">
          Download Worksheet
        </button>
      </div>
    </AuxWrapper>
  );
};


class LessonView extends React.Component {

  //set initial state to null properties
  state = {
    currentLesson: [],
    allLessons: [],
    totalLessons: ''
  }


  async setLessonState(lessonNumber) {

    //get course id from params
    const courseId = this.props.match.params.courseId

    //make request for lessons
    let courseLessons = await Axios.get('/api/courses/lessons?courseId=' + courseId);
    //filter our response to just the courses
    courseLessons = courseLessons.data.data

    //get current lesson by lesson number
    let currentLesson = '';
    courseLessons.forEach(lesson => {

        if(lesson.lessonNumber === lessonNumber) {
          // currentLesson.push(lesson);
          currentLesson = lesson;

        }
    });

    //redirect to boosts page if no current lesson is found | aka bad url
    if(!currentLesson) {
      window.location.replace("/boost"); 
    }

    //get total lesson length
    const totalLessons = courseLessons.length

    this.setState({
      currentLesson: currentLesson,
      allLessons: courseLessons,
      totalLessons
    })

  }

  //run lesson request when component mounts
  async componentDidMount() {
      this.setLessonState(this.props.match.params.lessonNumber);
  }

  //fires when lessonId pram is changed | aka a course is clicked
  async componentWillReceiveProps(nextProps) {
    
    //if next lesson number is different then this on eupdate state
    if(nextProps.match.params.lessonNumber !== this.props.match.params.lessonNumber){      
      this.setLessonState(nextProps.match.params.lessonNumber);
    }

  }
  
  render() {

    return (
      // <Loader/>
      <RequireLogin loggedIn={this.props.loggedIn}>
         <MobileHeader titleText="" />
        <div className="boost-container">
          <Drawer user={this.props.user}/>
          <div className="mainframe-container">
           
            <MainLesson totalLessons={this.state.totalLessons} courseName={this.props.match.params.courseName} currentLesson={this.state.currentLesson} />
            <AllLessons courseName={this.props.match.params.courseName} allLessons={this.state.allLessons} />
          </div>
        </div>
      </RequireLogin>
    );
  }
}

export default LessonView;
