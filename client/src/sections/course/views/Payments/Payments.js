import React , { Component } from 'react';
import '../CourseView/CourseView';

import DashboardWrapper from '../../components/DashboardWrapper';
import Loader from '../../components/Loader';
// {(this.state.processing) ? <Loader></Loader> : ''}
import RequireLogin from '../../components/RequireLogin';
import Axios from 'axios';

import CourseCard from '../../components/Courses/CourseCard';
import CheckoutForm from '../../components/Stripe/CheckoutForm';
// import Loader from '../../components/Loader';
// {(!this.state.loaded) ? <Loader></Loader> : ''}

import { MobileHeader } from '../../components';
import {Elements, StripeProvider} from 'react-stripe-elements';


const MainFrame = props => {
  
  
  //return the cards to show on pate
  const courseCards = () => {

    const cards = props.courses.map(function(data) { 
      
      return <CourseCard
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
      <MobileHeader titleText="Boosts" />
      <div className="main-frame-grid-cont">
        {courseCards()}
      </div>
    </div>
  );
};

class CourseView extends Component { 

  state = {
    courses: [],
  }
  
  //fire when component mounts
  async componentDidMount() {
    
    //make request for all courses
    const courses = await Axios.get('/api/courses');
    
    this.setState({
      courses: courses.data.data,
      
    })
    
  }

  loginLoader() {

    
    console.log(`loader`, super.state);
    
  }

  async submit(ev) {

  
    // ErrorDiv.innerHTML = '';

    //must have form fields field out
    let {token} = await this.props.stripe.createToken({name: "Test Name", type: 'card'});

    const ErrorDiv = document.getElementById('stripeCardError');

    if(token) {

      this.setState({processing: true})
  
      let response = await Axios({
        method: 'post',
        url: '/payments/stripe/charge',
        data: {
          tokenId: token.id
        }
      })

      this.setState({processing: false})
      
        if(response.data.success === true) {
          window.location.href = '/boost';
        } else {
          ErrorDiv.innerHTML = 'Whoops, ' + response.data.message;
        }

        
     

    } else {
      
      
      ErrorDiv.innerHTML = 'Please Check Your Card Information Is Correct';
      
    }
    
   
  }
  

  render() {

    return (

      
      <RequireLogin user={this.props.user} loggedIn={this.props.loggedIn}>

        
        
      
        <DashboardWrapper user={this.props.user}>
            {/* <MainFrame courses={this.state.courses} loaded={this.state.loaded} /> */}
            
        <div className="main-frame-cont">

            <div className="main-frame-header">
                <span className="main-frame-header-text">Payments</span>
            </div>
            <MobileHeader titleText="Payments" />
            <div className="main-content-no-grid" style={{marginTop: '190px'}}>
                <div>
                </div>
                <StripeProvider apiKey="pk_test_tywn7WNPpP3ifzQ0ZeCeHDpY">
                <Elements>
                    <CheckoutForm loginLoader={this.loginLoader} loginHandler={this.submit} />
                </Elements>
                </StripeProvider>
            </div>
        </div>
        </DashboardWrapper>

      </RequireLogin>
    )
  }
}

export default CourseView;
