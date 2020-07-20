import React from 'react';
import MuiProviders from './MuiProviders';
import RouterProvider from './RouterProvider';
import MuiPickersProvider from './MuiPickersProvider';

const providers = [
  MuiPickersProvider, 
  RouterProvider, 
  MuiProviders, 
];

const Providers = ({
  children, 
}) => {
  return providers.reduce((children, Provider) => (
    <Provider>
      {children}
    </Provider>
  ), children);
}

export default Providers
