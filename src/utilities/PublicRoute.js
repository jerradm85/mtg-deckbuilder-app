import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwtService from '../services/jwt-service'

export default function PublicRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        jwtService.hasToken()
          ? <Redirect to={'/'} />
          : <Component {...componentProps} />
      )}
    />
  )
}