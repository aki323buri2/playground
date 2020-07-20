import React from 'react';
import { makeStyles } from '@material-ui/core';
import UrisakiHeader from './UrisakiHeader';
import UrisakiBody from './UrisakiBody';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex', 
    flexDirection: 'column', 
    padding: theme.spacing(1), 
    '&>:not(:nth-child(1))': {
      marginTop: theme.spacing(1), 
    }, 
    height: '100%', 
  }, 
  body: {
    flexGrow: 1, 
  }, 
}));

const Urisaki = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UrisakiHeader className={classes.header} />
      <UrisakiBody className={classes.body} />
    </div>
  )
}

export default Urisaki
