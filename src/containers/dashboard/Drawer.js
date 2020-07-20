import React from 'react';
import {
  makeStyles, 
  Drawer as MuiDrawer,
  Toolbar, 
} from '@material-ui/core';
import IconLink from '../../components/IconLink';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const DRAWER_WIDTH = 200; 

const useStyles = makeStyles(theme => ({
  root: {
    width: DRAWER_WIDTH, 
  }, 
}));

const Drawer = ({
  children, 
  ...other 
}) => {
  const classes = useStyles(); 
  const { onClose } = other; 

  return (
    <MuiDrawer className={classes.root}
      classes={{
        paper: classes.root, 
      }}
      {...other}
    >
      <Toolbar>
        <IconLink onClick={onClose} edge="start"><ChevronLeftIcon/></IconLink>
      </Toolbar>
      {children}
    </MuiDrawer>
  )
}

export default Drawer
