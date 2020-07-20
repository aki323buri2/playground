import React from 'react'
import { routes } from './routes';
import RouteLinks from './components/RouteLinks';
import RoutesSwitch from './components/RoutesSwitch';
import { makeStyles, Typography, Link as MuiLink } from '@material-ui/core';
import Dashboard from './containers/dashboard/Dashboard';
import { Link as RouterLink } from 'react-router-dom'; 

const Link = props => (
  <MuiLink component={RouterLink} color="inherit" underline="none" {...props} />
);

const TITLE = '中島　亮三';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%', 
  }, 
}));

const App = () => {
  const classes = useStyles(); 

  return (
    <Dashboard 
      className={classes.root}
      header={<Typography component={Link} to="/">{TITLE}</Typography>}
      drawer={({ onClose }) => <RouteLinks routes={routes} itemProps={{ onClick: onClose }}/>}
      content={<RoutesSwitch routes={routes} />}
    />
  )
}

export default App
