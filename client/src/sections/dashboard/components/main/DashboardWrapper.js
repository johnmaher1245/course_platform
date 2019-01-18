import React, { Component } from 'react';
import Header from '../main/Header';
import Sidebar from '../main/Sidebar';
import Footer from '../main/Footer';

export default class DashboardWrapper extends Component {
    render() {

        return (

            <div className="dashboard">
                
                <Header></Header>
                <Sidebar></Sidebar>

                <div className="dashboard main">
                    <div className="content">

                        {this.props.children}

                    <Footer></Footer>

                    </div>

                </div>

            </div>

        )

    }
}