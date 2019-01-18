import React, { Component } from 'react';
import axios from 'axios'
// import Instruction from '../components/templates/Instruction';


import DashboardWrapper from '../components/main/DashboardWrapper';



class DBDevelopment extends Component {

    

    //set default state of container
    state = {
        dbData: {
            
            data: {
                success: 'true',
                message: '',
                data: []
            }
        },
        table: this.props.match.params.collection
    }

    

    //checks to see if oldbroswer location is different than current
    //if so rerenders the page
    reRenderPage = async (nextProps) => {

        var oldLocation = this.props.match.params.collection;
        var newLocation = nextProps.match.params.collection;

        if(oldLocation !== newLocation) {
            await this.setState({table: newLocation});
            this.showCollection();
        }

    }
    



    clearCollection = async () =>    {

        await axios.get('/db/'+this.state.table+'/clear');
        this.showCollection();
    
    }

    showCollection = async () => { 

        try {
            const res = await axios.get('/db/'+this.state.table+'/list');
        
            this.setState({dbData: res});
        } catch(e) {

            this.setState({dbData: {
               data: {
                    success: 'false',
                    message: 'Could not find the route: /db/'+this.state.table+'/list. This either means an error in your express routing or the collection you are looking for does not exists.',
                    data: []
               }
            }});
            
        }
        
        
    }

    seedCollection = async () => {
        //seed collection
        await axios.get('/db/'+this.state.table+'/seed');
        this.showCollection();
    }


    //run after page loads
    componentDidMount() {

        this.showCollection();
    }

    componentWillReceiveProps (nextProps) {
        
        this.reRenderPage(nextProps);
    }

    createTable = (x) => {

        let table = '';

        //if our table has any data
        // if ( this.state.dbData.data.length > 0)  {
        if ( this.state.dbData.data.data.length > 0)  {

            table = (
                <table key={x}><tbody>
                   { this.state.dbData.data.data.map((data, key) => {

                        return (
                            <tr key={key} >

                                {Object.keys(data).map(function(x, y) {
                                
                                return <td key={x}><span className="font-weight-bold">{x}</span>: {data[x]}</td>
                                })}

                                <td style={{textAlign: 'right'}}>
                                    <a href="javascript:void(0);" data-id={data['_id']} data-action="edit" > <i class="material-icons text-success">edit</i></a>
                                    <a href="javascript:void(0);" data-id={data['_id']} data-action="delete" > <i class="material-icons text-danger">delete</i></a>
                                </td>
                    
                            </tr>
                        )
                    })}
                </tbody></table>
            )
            
        } else {

            table = <table><tbody><tr><td>There are no entries in this collection</td></tr></tbody></table>

        }

        return table;
    }


    

    render() {

        let content = '';

        // if we dont have a success show the error message
        // else create the table to display
        if(this.state.dbData.data.success === 'false') {
            content = ( 
                <div>
                    <h4 className="card-title text-danger">Error:</h4>
                    <p>{this.state.dbData.data.message}</p>
                </div> 
            );
        } else {
            content =  this.createTable(this.state.table) ;
        }

    
        return (

            <DashboardWrapper>
    
                <div className="card">
                    <div className="card-content">


                        <div className="row mb-5">
                            <h2 className="card-title mt-0">Collection: {this.state.table} <span className="right">Document Count: {this.state.dbData.data.data.length}</span></h2>
                            <button type="button" className="btn btn-warning mr-2 gradient" onClick={this.seedCollection}> Seed Collection</button>
                            <button type="button" className="btn btn-danger mr-2 gradient" onClick={this.clearCollection}> Clear Collection</button>
                            <button type="button" className="btn btn-success mr-2 gradient " onClick={this.showCollection}> Refresh Entries</button>
                        </div>

                        { content }

                    </div>
                </div>
    
            </DashboardWrapper>
    
        
        );
    }

};

// //required for state changes
// function mapStateToProps({ db }) {
//     return { db };
// }

export default DBDevelopment;