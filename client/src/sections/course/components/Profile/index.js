import React, { Component } from 'react';
import { Input } from '../index';
import { GlobalContext } from '../../context';
// import firebase from 'firebase'

const styles = {
  profileImage: { width: '75px', height: '75px', borderRadius: '999px' },
  userField: { maxWidth: '400px', width: '100%' }
};

class Profile extends Component {
  static contextType = GlobalContext;
  async componentDidMount() {
      // const user = await firebase.auth().currentUser

  }

  render() {
    return (
      <div className="mainframe-container flex column align-center justify-center">
        <img style={styles.profileImage} src="" alt="profile pic" />
        <form style={styles.userField} className="flex column wrap">
          <Input value={'posta'} />
          <Input value={'posta'} />
          <Input value={'posta'} />
          <Input value={'posta'} />
        </form>
      </div>
    );
  }
}

export default Profile;
