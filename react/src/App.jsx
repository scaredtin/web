import React from 'react'
import AuthLayout from './Layout/AuthLayout';
import GuestLayout from './Layout/GuestLayout';
import { useUserState } from './contexts/ContextProvider';
import { Navigate } from 'react-router-dom';
export default function App() {
        const {currentUser, userToken, setCurrentUser, setUserToken} = useUserState();

    if(!userToken){
        return <Navigate to="/login"/>
    }
    return (
        <div className=""> 
        <GuestLayout/>                       
        </div>
    )
}
