import React from 'react';
import { Paper } from '@material-ui/core';
import { useMuiStyles } from '../../hooks/muiHooks';

const useStyles = useMuiStyles(theme => ({
  root: {
    padding: theme.spacing(1), 
  }, 
}));

const UrisakiBody = ({
  className, 
}) => {
  const classes = useStyles(className)();

  return (
    <Paper className={classes.root}>
      body
    </Paper>
  )
}

export default UrisakiBody
