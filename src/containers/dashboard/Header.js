import React from 'react';
import {
  AppBar, 
  Toolbar,
  makeStyles, 
} from '@material-ui/core'
import IconLink from '../../components/IconLink';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  spacer: {
    flexGrow: 1, 
  }, 
}));

const Header = ({
  children, 
  menuClick, 
  gitUrl, 
}) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <IconLink onClick={menuClick} edge="start"><MenuIcon/></IconLink>
        {children}
        <div className={classes.spacer} />
        <IconLink href={gitUrl} edge="end"><GitHubIcon/></IconLink>
      </Toolbar>
    </AppBar>
  )
}

export default Header
