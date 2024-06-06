import React from 'react'
import { Navigate } from 'react-router-dom'
import useSessionStorage from '../hooks/useSessionStorage'

export default function PublicRoute({ children }) {

    const [auth] = useSessionStorage('auth', '')
    return auth ? <Navigate to='/' /> : children

}
