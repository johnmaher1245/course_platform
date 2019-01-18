import React from 'react';

import DashboardWrapper from '../components/main/DashboardWrapper';

import  Alerts  from '../components/demo/Alerts';
import  Buttons  from '../components/demo/Buttons';
import  Text  from '../components/demo/Text';
import Tables from '../components/demo/Tables';



const Landing = () => {

    return (

        <DashboardWrapper>

            <div className="card">
                <div className="card-content">
                    <span className="card-title">Alerts Elements</span>
                    <Alerts></Alerts>

                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Button Elements</span>
                    <Buttons></Buttons>

                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Text Elements</span>
                    <Text></Text>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <span className="card-title">Tables</span>
                    <Tables></Tables>
                </div>
            </div>

        </DashboardWrapper>

    )

};

export default Landing;