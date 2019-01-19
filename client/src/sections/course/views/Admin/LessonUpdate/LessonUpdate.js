import React , { Component } from 'react';
import '../../CourseView/CourseView';

import AuxWrapper from '../../../../../hoc/AuxWrapper';

import DashboardWrapper from '../../../components/DashboardWrapper';
import Loader from '../../../components/Loader';
// {(this.state.processing) ? <Loader></Loader> : ''}
import RequireLogin from '../../../components/RequireLogin';
import Axios from 'axios';

import CheckoutForm from '../../../components/Stripe/CheckoutForm';
// import Loader from '../../components/Loader';
// {(!this.state.loaded) ? <Loader></Loader> : ''}

import { MobileHeader } from '../../../components';
import {Elements, StripeProvider} from 'react-stripe-elements';

const Updated = (props) => {
    if(props.updated) {
        return (
            <div className="alert alert-success">Lesson Updated</div>
        )
    }

    return '';
}

//each lesson Box
const LessonBox = (props) => {
    
    return (
        <div className="box bg-black">
            <h4 className="mt-0">{props.title}</h4>
            <input type="text" className="input-standard" onChange={props.handleInputChange} id={props.field} name={props.field} value={props.value} />
        </div>
    )
}

const LessonTextarea = (props) => {
    
    return (
        <div className="box bg-black">
            <h4 className="mt-0">{props.title}</h4>
            <textarea className="input-standard" onChange={props.handleInputChange} id={props.field} name={props.field} value={props.value} /> 
        </div>
    )
}


class AdminLessonView extends Component { 
    state = {
        name: '',
        pageTitle: '',
        updated: false
    }

    handleInputChange = (event) => {

        console.log(event.target.value);
        console.log(event.target.id);
        
        this.setState({ 
            [event.target.id]: event.target.value,
            updated: false
         });

        

    }
    
    
    async fetchLesson(lessonId) {
    
        let lesson = await Axios.get('/api/lessons/find/?lessonId=' + lessonId);
        lesson = lesson.data.data;

        this.setState({
            name: lesson.name,
            description: lesson.description,
            video: lesson.video,
            videoThumbnail: lesson.videoThumbnail,
            worksheet: lesson.worksheet,
            lessonNumber: lesson.lessonNumber,
            pageTitle: lesson.name
        })

        console.log(this.state.videoThumbnail);
        
    
    }

    //run lesson request when component mounts
    async componentDidMount() {
        this.fetchLesson(this.props.match.params.lessonId);
    }



    updateHandler = async () => {
        
        const lessonFields = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            video: document.getElementById("video").value,
            videoThumbnail: document.getElementById("videoThumbnail").value,
            worksheet: document.getElementById("worksheet").value,
            lessonNumber: document.getElementById("lessonNumber").value,
            lessonId: this.props.match.params.lessonId
        }
    
        let updatedLesson = await Axios({
            method: 'post',
            url: '/api/lessons/update',
            data: {
              lessonFields
            }
          })

          updatedLesson = updatedLesson.data

        this.setState({
            name: updatedLesson.name,
            description: updatedLesson.description,
            video: updatedLesson.video,
            videoThumbnail: updatedLesson.videoThumbnail,
            worksheet: updatedLesson.worksheet,
            lessonNumber: updatedLesson.lessonNumber,
            pageTitle: updatedLesson.name,
            updated: true
        })
        
        
    }

  render() {

    return (

      
      <RequireLogin user={this.props.user} loggedIn={this.props.loggedIn}>

        
        
      
        <DashboardWrapper user={this.props.user}>
            {/* <MainFrame courses={this.state.courses} loaded={this.state.loaded} /> */}
            
        <div className="main-frame-cont">

            <div className="main-frame-header">
                <span className="main-frame-header-text">{this.state.pageTitle}</span>
            </div>
            <MobileHeader user={this.props.user} titleText="Payments" />
            <div className="main-content-no-grid">

                <Updated updated={this.state.updated} />

                <LessonBox title="Lesson Name" field="name" value={this.state.name} handleInputChange={this.handleInputChange} />
                <LessonTextarea title="Description" field="description" value={this.state.description} handleInputChange={this.handleInputChange} />
                <LessonBox title="Video Url" field="video" value={this.state.video} handleInputChange={this.handleInputChange} />
                <LessonBox title="Video Thumbnail" field="videoThumbnail" value={this.state.videoThumbnail} handleInputChange={this.handleInputChange} />
                <LessonBox title="Worksheet" field="worksheet" value={this.state.worksheet} handleInputChange={this.handleInputChange} />
                <LessonBox title="Lesson Number" field="lessonNumber" value={this.state.lessonNumber} handleInputChange={this.handleInputChange} />

                <div className="box text-right">
                    <button onClick={this.updateHandler} type="button" className="btn btn-success"> Update Lesson</button>
                </div>
                
            </div>
        </div>
        </DashboardWrapper>

      </RequireLogin>
    )
  }
}

export default AdminLessonView;

