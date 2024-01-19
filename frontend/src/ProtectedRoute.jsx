import React from 'react'
import {Navigate} from 'react-router-dom'

import {useAuth} from './hooks/useAuth'

const ProtectedRoute = ({children}) => {
    const { user } = useAuth()

    return !user ? <Navigate to='/login' /> : {children}
}

export default ProtectedRoute
