import React from 'react'
import GuestLayout from './Layout/GuestLayout';
import { useUserState } from './contexts/ContextProvider';
import { Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
export default function App() {
        const {currentUser, userToken, setCurrentUser, setUserToken} = useUserState();

    if(!userToken){
        return <Navigate to="/login"/>
    }
    return (
        <div className=""> 
        <Header/>
        <GuestLayout/>    
        <Footer/>                   
        </div>
    )
}
