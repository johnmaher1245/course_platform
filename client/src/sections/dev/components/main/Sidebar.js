import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Sidebar extends Component {


    state = {
        sidebarEntries: [],
        urlParameter: ''
    }


    componentDidMount = () => {
        

        // this.setState({urlParamenter: this.props.match.params.collection})
        
        this.getMongooseCollections();
        
    }

    getMongooseCollections = async () => {

        const res = await Axios.get('/db/information/collections');
        console.log(res.data);
        
        this.setState({sidebarEntries: res.data});

    }

    createDBCollectionsLink = () => {

        console.log(this.state.sidebarEntries);
        

        let sidebarLinks = '';

        //if our sidebarLinks has any data
        // if ( this.state.dbData.data.length > 0)  {
        if ( this.state.sidebarEntries.length > 0)  {

            console.log(3);
            
            return ( 
            <div>  
                {
                <div>
                    {this.state.sidebarEntries.map((name, index) => {

                        let addedClass = '';

                        if(this.state.urlParamenter === name) {
                            addedClass = 'active';
                        } 
        
                        return (
                            <li className={addedClass}>
                                <Link to={"/dev/db/" + name}>
                                    <span className="icon"><i className="material-icons">laptop</i></span>
                                    {name} 
                                </Link>
                            </li>
                        )
                    })}

                </div>
                } 
            </div>  
            ) 

        } 
       
    };
   
    render() {

       const sidebarDBLink = this.createDBCollectionsLink();


        return (


        <div className="dashboard sidebar hide-on-small-only">

        <ul className="links" >
            <li className="logo">
                <Link to="/">Exron Music</Link>
            </li>
            
            <li className="break"style={{marginTop: '20px', borderTop: 'none'}} >
                Database
            </li>
    
           {sidebarDBLink}

           

            <li className="break" >
                Recent Activity
            </li>

            <li >
                <Link to="">
                    <span className="icon"><i className="material-icons">share</i></span>
                    Analytics
                </Link>
            </li>
            <li className="active">
                <Link to="">
                    <span className="icon"><i className="material-icons">whatshot</i></span>
                    Data
                </Link>
            </li>

            <li className="break">
                My Profile
            </li>

            <li>
            <Link to="">
                    <span className="icon"><i className="material-icons">people</i></span>
                    Contacts
            </Link>
            </li>


            <li >
                <Link to="">
                    <span className="icon"><i className="material-icons">person</i></span>
                    Account Settings
                </Link>
            </li>

            <li className="bottom">
                <Link to="">
                    <span className="icon"><i className="material-icons">info</i></span>
                    Support
                </Link>
            </li>
        </ul>


        </div>
           
        );
    }

}



export default Sidebar;




