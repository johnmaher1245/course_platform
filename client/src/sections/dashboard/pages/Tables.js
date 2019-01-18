import React from 'react';

import DashboardWrapper from '../components/main/DashboardWrapper';
import Instruction from '../components/templates/Instruction';


const Landing = () => {

    return (

        <DashboardWrapper>

           <div>

                <Instruction classes="instruction-success">
                    <h2 className="card-title">
                        What to do with the tables.
                        <i className="material-icons text-warning right">info</i>
                    </h2>
                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa animi
                        odit aliquid, soluta fugiat est ipsam iste, quaerat, necessitatibus eaque vel ducimus quasi illum
                        mollitia. Sit iure temporibus cupiditate!</p>
               </Instruction>

                <div className="row">
                    <div className="col m6 s12">
                        <div className="card card-table">
                    
                            <div className="card-content">
                                <table id="test-table" className="responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Item Name</th>
                                            <th>Item Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>

                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <div className="card card-table">
                        
                            <div className="card-content">
                                <table id="test-table2" className="responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Item Name</th>
                                            <th>Item Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alvin<br/>alvin@gmail.com</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-table">
                    
                    <div className="card-content">
                        <table id="test-table3" className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alvin<br/>alvin@gmail.com</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alvin<br/>alvin@gmail.com</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alvin<br/>alvin@gmail.com</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alvin<br/>alvin@gmail.com</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alvin<br/>alvin@gmail.com</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

           </div>

        </DashboardWrapper>

    )

};

export default Landing;