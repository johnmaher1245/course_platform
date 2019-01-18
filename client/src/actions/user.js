import axios from 'axios';

//redux thunk's purpouse is to inspect value fo the below function and forward off to reducers
export const dbGetUsers = () => async dispatch => {
    //dispatch action after this function runs
    //actions reset page data 
    const res = await axios.get('/db/show/user');
    dispatch({  type: 'table', payload: res.data});
};

