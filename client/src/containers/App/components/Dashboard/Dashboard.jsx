import React from 'react';
import Grid from '@material-ui/core/Grid';
import Block from './components/Block';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minHeight: 100 + 'vh',
    maxHeight: 100 + 'vh',
    background: 'white',
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

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <main position={'hidden'} className={classNames(classes.content, classes.root)}>
        <div className={classes.toolbar} />
        <div display='flex' flexWrap='wrap' flexDirection='row'>
          <Block/>
        </div>
      </main>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);