import React from 'react';
import Axios from 'axios';

// var config = {
//   apiKey: 'AIzaSyDTn1Oxe_RrZfbix6o6k8GqfkFStz45KPc',
//   authDomain: 'boostapp-4271c.firebaseapp.com',
//   databaseURL: 'https://boostapp-4271c.firebaseio.com',
//   projectId: 'boostapp-4271c',
//   storageBucket: '',
//   messagingSenderId: '253567398084'
// };



export const GlobalContext = React.createContext();

class AppProvider extends React.PureComponent {

    //set initial state to not logged in
  state = {
    authenticated: false,
    loaded: false
  };

  //when component mounts call the api to see if we have a user
  async componentDidMount() {

    const loggedIn = await Axios.get('/api/current_user')


    if(loggedIn.data['_id']) {
        this.setState({ authenticated: true, loaded: true });
    } else {
        
        this.setState({ authenticated: false, loaded: true });
    }
    

  }

 
  render() {
    const { authenticated, loaded } = this.state;
    return loaded ? (
      <GlobalContext.Provider
        value={{
        //   methods: this.methods,
          authenticated,
          loaded
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    ) : (
      <h1>te</h1>
    );
  }
}

export default AppProvider;


// import React from 'react';
// import firebase from 'firebase';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect
// } from 'react-router-dom';

// var config = {
//   apiKey: 'AIzaSyDTn1Oxe_RrZfbix6o6k8GqfkFStz45KPc',
//   authDomain: 'boostapp-4271c.firebaseapp.com',
//   databaseURL: 'https://boostapp-4271c.firebaseio.com',
//   projectId: 'boostapp-4271c',
//   storageBucket: '',
//   messagingSenderId: '253567398084'
// };
// firebase.initializeApp(config);

// const provider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// export const GlobalContext = React.createContext();

// class AppProvider extends React.PureComponent {
//   state = {
//     authenticated: false,
//     loaded: false
//   };

//   async componentDidMount() {
//     console.log('provider mounting asuth state = ' + this.state.authenticated);
//     await firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         const displayName = user.displayName;
//         const email = user.email;
//         const photoURL = user.photoURL;
//         const uid = user.uid;
//         firebase.database().ref(`user/${uid}`).set({
//           displayName,
//           email,
//           photoURL
//         });
//         console.log(email);
//         this.setState({
//           authenticated: true,
//           loaded: true
//         });
//         return;
//       }
//       this.setState({ authenticated: false, loaded: true });
//     });
//   }

//   googleSignInHandler = () => {
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(result => {
//         const token = result.credential.accessToken;
//         const user = result.user;
//         console.log(user);
//       })
//       .catch(error => {
//         console.log(error);
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = error.credential;
//       });
//   };
//   facebookSignInHandler = () => {
//     firebase
//       .auth()
//       .signInWithPopup(facebookProvider)
//       .then(result => {
//         const token = result.credential.accessToken;
//         const user = result.user;
//         console.log(user);
//       })
//       .catch(error => {
//         console.log(error);
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = error.credential;
//       });
//   };

//   signOutHandler = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         //signed out
//         this.setState({
//           authenticated: false,
//           loaded: true
//         });
//         console.log('signed out');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   methods = {
//     googleSignInHandler: this.googleSignInHandler,
//     signOutHandler: this.signOutHandler,
//     facebookSignInHandler: this.facebookSignInHandler
//   };

//   render() {
//     console.log('authenticated? ' + this.state.authenticated);
//     const { authenticated, loaded } = this.state;
//     return loaded ? (
//       <GlobalContext.Provider
//         value={{
//           methods: this.methods,
//           authenticated,
//           loaded
//         }}
//       >
//         {this.props.children}
//       </GlobalContext.Provider>
//     ) : (
//       <h1>te</h1>
//     );
//   }
// }

// export default AppProvider;

