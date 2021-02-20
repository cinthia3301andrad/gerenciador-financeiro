import React, {useContext} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {AuthContext} from './AuthContext'

export const PrivateRoutes = (props: any) => {
  const {component: RouteComponent, ...other} = props;
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...other}
      render={(routeProps) => 
          !!user ? (
              <RouteComponent {...routeProps}/>
          ) : (
            <Redirect to="/"/>
          )
      }
    />
  )

}

