import React, { Component } from 'react';
import { connect } from 'react-redux';

class Db extends Component {

    // componentDidMount() {
    //     //sets this.props.auth
    //     this.props.dbGetUsers();
        
    // }

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
                return <div><pre>{JSON.stringify(this.props.db, null, 2) }</pre></div>;


        }
    }


    render() {

        console.log(this.renderContent());
        return (
            this.renderContent()
        )
    }

};

function mapStateToProps({ db }) {
    return { db };
}

export default connect(mapStateToProps)(Db);