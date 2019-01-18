//state is null to start
export default function(state = null, action) {

    switch(action.type) {

        //any time request comes in with FETCH_USER run the reducer

        //returns a new state, because a new stare is rendered the page updates
        case 'table':
            //this is the user model or false if no logged in user
            return action.payload || false;

        default:
            return state;
    }
}