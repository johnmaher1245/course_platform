import React from 'react';
import Alert from '../templates/Alert';

export default  function () {
    return (
    <div>
        <Alert classes="alert-success z-depth-1" text="Success Alert Here!"></Alert>
        <Alert classes="alert-danger z-depth-1" text="Danger Alert Here!"></Alert>
        <Alert classes="alert-warning z-depth-1" text="Warning Alert Here!"></Alert>
        <Alert classes="alert-info z-depth-1" text="Info Alert Here!"></Alert>

        <Alert classes="alert-success gradient z-depth-1" text="Gradient Success Alert Here!"></Alert>
        <Alert classes="alert-danger gradient z-depth-1" text="Gradient Danger Alert Here!"></Alert>
        <Alert classes="alert-info gradient z-depth-1" text="Gradient Info Alert Here!"></Alert>
        <Alert classes="alert-warning gradient z-depth-1" text="Gradient Warning Alert Here!"></Alert>

      
    </div>
    )
} 