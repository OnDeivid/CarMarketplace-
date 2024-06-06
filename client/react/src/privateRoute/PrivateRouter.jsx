import React from 'react'
import { Navigate } from 'react-router-dom'

import useSessionStorage from '../hooks/useSessionStorage'

export default function PrivateRoute({ children }) {

    const [auth] = useSessionStorage('auth', '');
    return auth ? children : <Navigate to='/login' />
}
