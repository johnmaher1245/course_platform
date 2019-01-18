import React, { Component } from 'react';
import { connect } from 'react-redux';


import DashboardWrapper from '../components/main/DashboardWrapper';




class DB extends Component {

    renderContent() {
        //this.props.auth is equal to the user or req.user
        switch(this.props.db) {

            //dont know what to do yet dont show any content
            case null:
                console.log(this.props.db);
                
                return 'dont know';

            //user is logged out
            case false:
                console.log(this.props.db);
                
                return 'test';

            //user logged in
            default:
                console.log(this.props.db);

                
                return <pre style={{fontSize: '10px'}}>{JSON.stringify(this.props.db, null, 2) }</pre>;


        }
    }

    render() {
        return (

            <DashboardWrapper>
    
                { this.renderContent()}
    
            </DashboardWrapper>
    
        
        );
    }

};

//required for state changes
function mapStateToProps({ db }) {
    return { db };
}

export default connect(mapStateToProps)(DB);