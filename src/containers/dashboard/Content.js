import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
  }, 
  spacer: {
    height: theme.mixins.toolbar.minHeight, 
  }, 
  content: {
    flexGrow: 1, 
  }, 
}));

const Contents = ({
  children, 
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.spacer}/>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

export default Contents
