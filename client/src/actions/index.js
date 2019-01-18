import axios from 'axios';
import { FETCH_USER } from './types';

//redux thunk's purpouse is to inspect value fo the below function and forward off to reducers
export const fetchUser = () => async dispatch => {
    //dispatch action after this function runs
    //actions reset page data 
    const res = await axios.get('/api/current_user');
    dispatch({  type: FETCH_USER, payload: res.data});
};

export const handleToken = (token) => async dispatch => {

    const res = await axios.post('/api/stripe', token);

    //update header which is updated with the FETCH_USER payload
    dispatch({  type: FETCH_USER, payload: res.data});

};


// //redux thunk's purpouse is to inspect value fo the below function and forward off to reducers
// export const dbGetUsers = () => async dispatch => {
//     //dispatch action after this function runs
//     //actions reset page data 
        
//     // const res = await axios.get('/db/show/user');
//     const res = await axios.get('/db/users/list');

//     dispatch({  type: 'table', payload: res.data});
// };
