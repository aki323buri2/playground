import React from 'react';
import Urisaki from "./features/urisaki/Urisaki";

const routeCoordinate = routes => routes.map(({
  name, 
  title, 
  path, 
  ...other 
}) => ({
  name, 
  title: title || name, 
  path: path || `/${name}`, 
  ...other, 
}));

export const routes = routeCoordinate([
  {
    name: 'urisaki', 
    title: '売り先マスタ', 
    children: <Urisaki />, 
  }, 
]); 
