import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';

const styles = {
  root: {
    position: 'relative',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  leftButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: 'transparent',
    border: 'none',
  }
}

const Navbar = (props) => {
  const { classes, color } = props;
  const colorCode = color ? color : '#000000';
  return (
    <div className={classes.root}>
      <button style={{color: colorCode, fontSize: '2rem', padding: '10px'}} className={classes.leftButton}>{props.icon ? <props.icon /> : <Close />}</button>
      <img style={{height: '45%'}} src={props.img} />
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
