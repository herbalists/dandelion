import React, { Component } from 'react';
import './Dashboard.css';
import Grid from '@material-ui/core/Grid';
import Block from './components/Block';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function Dashboard(props) {
  const { classes } = props;
  return (
      <main position={'hidden'} className={classes.content}>
      <div className={classes.toolbar} />
          <Grid spacing={16}>
            <Block/><Block/><Block/>
          </Grid>
      </main>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);