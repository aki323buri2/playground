import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

const RoutesSwitch = ({
  routes, 
}) => {
  return (
    <Switch>
      {routes.length && (
        <Route exact path="/">
          <Redirect to={routes[0].path} />
        </Route>
      )}
      {routes.map(({ name, path, children }) => (
          <Route key={name} path={path}>
          {children}
        </Route>
      ))}
    </Switch>
  )
}

export default RoutesSwitch
