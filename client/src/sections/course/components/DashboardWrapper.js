import React from 'react';
import '../views/CourseView/CourseView.css';

import { GlobalContext } from '../context/index';
import Drawer from './Drawer/Drawer';



class DashboardWrapper extends React.Component { 
  static contextType = GlobalContext;


  render() {
    const { methods } = this.context;

    return this.props.user ? (
      <div className="container">
        <Drawer user={this.props.user} methods={methods} />
        {this.props.children}
      </div>
    // ) : <div style={{color: 'white'}}>user not found but authentication passed</div>;
    ) : null;
  }
}

export default DashboardWrapper;
