import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwtService from '../services/jwt-service'

export default function AuthRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        jwtService.hasToken()
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}