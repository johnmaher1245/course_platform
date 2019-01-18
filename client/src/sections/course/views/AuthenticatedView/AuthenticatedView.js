import React from 'react';
import PropTypes from 'prop-types';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Image from '../../../../assets/images/title.png';

import Navbar from '../../components/Navbar';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#74EE75',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    paddingTop: 'calc(100vh * .20)',
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
    flexBasis: '300px',
  },
  textContainer: {
    marginTop: 'calc(100vh * .05)',
  },
  logoutContainer: {
    marginTop: 'calc(100vh * 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoutText: {
    cursor: 'pointer',
    fontSize: '1rem',
    opacity: '0.5'
  },
  nameText: {
    cursor: 'pointer',
    fontSize: '1.1rem',
    opacity: '1',
    padding: '10px',
  },
  menuText: {
    cursor: 'pointer',
    fontWeight: '900',
    fontSize: '1.5rem',
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
})

class AuthenticatedView extends React.Component {


  responseFacebook = (response) => {
    console.log(response);
  }

  responseGoogle = (response) => {
    console.log(response);
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar img={Image} />
        <div className={classes.container}>
          <Grid className={classes.flexCenter} container>
            <Grid className={classes.flexColumn} item xs={12}>
              <div>
                <span className={classes.menuText}>Boosts</span>
              </div>
              <div className={classes.textContainer}>
                <span className={classes.menuText}>Support</span>
              </div>
              <div className={classes.logoutContainer}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" className={classes.avatar} />
                <span className={classes.nameText}>Monica Lineweaver</span>
                <span className={classes.logoutText}>logout</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

AuthenticatedView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthenticatedView);