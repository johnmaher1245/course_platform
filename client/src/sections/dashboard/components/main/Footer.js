import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {


    render() {
       return (
        <div>
            <footer className="z-depth-1">
                <ul>
                    
                    <li>
                        <Link to="">
                                Home
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Support
                        </Link>
                    </li>
                    <li>&copy; 2019 Arsenal OS</li>
                    
                </ul>
            </footer>
        </div>
       )
    }

};


export default (Footer);