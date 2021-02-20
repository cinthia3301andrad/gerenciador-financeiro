import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'

import {AuthProvider} from '../auth/AuthContext'
import { PrivateRoutes } from '../auth/ PrivateRoutes'

const Routes: React.FC = () => (
  <AuthProvider> 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
      <PrivateRoutes exact path="/teste" component={Dashboard}/>
    </Switch>
  </AuthProvider>


)

export default Routes;