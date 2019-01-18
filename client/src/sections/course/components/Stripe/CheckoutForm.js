import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import CheckoutStyles from './CheckoutStyles.css';
import Axios from 'axios';

import Loader from '../../components/Loader';


class CheckoutForm extends Component {

  
  constructor(props) {
    super(props);
    var checkout = this
    this.state = {complete: false, processing: false};
    this.submit =  this.props.loginHandler.bind(this);
    
  }

  // async submit(ev) {

  //   console.log(`props`, this.props);
    
  //   //must have form fields field out
  //   let {token} = await this.props.stripe.createToken({name: "Test Name", type: 'card'});

  //   const ErrorDiv = document.getElementById('stripeCardError');

  //   console.log(token);
  //   if(token) {
  //     // let response = await fetch("/payments/stripe/charge", {
  //     //   method: "POST",
  //     //   headers: {"Content-Type": "text/plain"},
  //     //   body: token.id
  //     // });
  
  //     let response = await Axios({
  //       method: 'post',
  //       url: '/payments/stripe/charge',
  //       data: {
  //         tokenId: token.id
  //       }
  //     })
  //     console.log(response);
      
    

  //       if(response.data.success === true) {
  //         console.log(`paid successfully`);
  //         window.location.href = '/boost';
  //       } else {
  //         ErrorDiv.innerHTML = 'Whoops, ' + response.data.message;
  //       }

        
     

  //   } else {
      
      
  //     ErrorDiv.innerHTML = 'Please Check Your Card Information Is Correct';
      
  //   }
    
   
  // }

  render() {
    return (

      
      
      <div className="checkout" >
      {(this.state.processing) ? <Loader></Loader> : ''}
      
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio atque rem voluptates, aut ratione rerum, facere, nihil quos officia accusamus officiis tempore? Eum, doloremque deleniti debitis porro accusamus voluptas dignissimos??</p>

        <div id="stripeCardError"></div>

        <CardElement  className="card-element" />
        
        <div className="text-right">
        <button onClick={this.submit}>Get Xuru Now!</button>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);