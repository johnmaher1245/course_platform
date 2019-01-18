import React from 'react';
import PropTypes from 'prop-types';
import {  withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Image from '../../../../assets/images/loginTitle.png';

// import Navbar from '../../components/Navbar';
import {AuthButton} from '../../components'
import { GlobalContext } from '../../context/index';
// import { history } from '../../index';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    minHeight: '90vh',
    maxHeight: '100vh',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  flexCenter: {
    justifyContent: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '300px',
  },
  img: {
    width: '50%',
  },
  textCont: {
    color: 'rgba(255,255,255,0.7)',
    padding: 'calc(100vh * .01)',
    marginBottom: 'calc(100vh * .05)',
    marginTop: 'calc(100vh * .05)',
  }
})

class SocialAuth extends React.Component {
  static contextType = GlobalContext;

  componentDidMount() {
    console.log(this.context.loaded)
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  responseGoogle = (response) => {
    console.log(response);
  }


  render() {

    console.log(this.context);
    
    // const { methods, authenticated, loaded } = this.context;
    // const {  authenticated, loaded } = this.context;
    const { classes } = this.props;
    // if (loaded && authenticated) return history.go('/boost')
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid className={classes.flexCenter} container>
            <Grid className={classes.flexColumn} item xs={12}>
              <img className={classes.img} src={Image} alt="company logo" />
              <div className={classes.textCont}>
                <span>
                  The First Platform For On-Demand,
                  Expert Support In Growing Your Business.
                </span>
              </div>
              {/* <AuthButton facebook={true} signInHandler={methods.facebookSignInHandler}/>
            <AuthButton google={true} signInHandler={methods.googleSignInHandler}/> */}
              <AuthButton facebook={true} />
              <AuthButton google={true} />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

SocialAuth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialAuth);