import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
 } from '@material-ui/core';
 import { Link as RouterLink } from 'react-router-dom'; 
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const RouteLinks = ({
  routes, 
  itemProps, 
}) => {
  return (
    <List>
      {routes.map(({ name, path, icon, title }) => (
          <ListItem key={name} button component={RouterLink} to={path} {...itemProps}>
          <ListItemIcon>{icon || <PlayCircleOutlineIcon/>}</ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default RouteLinks;
