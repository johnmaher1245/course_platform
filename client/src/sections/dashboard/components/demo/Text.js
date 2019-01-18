import React from 'react';

const Text = function() {
    return (
        <div>
            <div className="row">
                <div className="col m6 s12">
                    <h1 className="m-0">Hi! I'm an h1!</h1>
                    <h2>Hi! I'm an h2!</h2>
                    <h3>Hi! I'm an h3!</h3>
                    <h4>Hi! I'm an h4!</h4>
                    <h5>Hi! I'm an h5!</h5>
                    <h6>Hi! I'm an h6!</h6>
                </div>
                <div className="col m6 s12">
                    <p>Hi! I'm some black paragraph text.</p>
                    <p className="text-success">Hi! I'm some green paragraph text.</p>
                    <p className="text-danger">Hi! I'm some red paragraph text.</p>
                    <p className="text-warning">Hi! I'm some orange paragraph text.</p>
                    <p className="text-info">Hi! I'm some info paragraph text.</p>
                </div>
            </div>
        </div>
    )
}

export default Text;
