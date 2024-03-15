import React from 'react'
import GuestLayout from './Layout/GuestLayout';
import { useUserState } from './contexts/ContextProvider';
import { Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

export default function App() {
        const {currentUser, userToken, setCurrentUser, setUserToken} = useUserState();

    if(!userToken){
        return <Navigate to="/login"/>
    }
    return (
        <div className=""> 
        <Banner/>
        <Header/>
        <GuestLayout/>    
        <Footer/>                   
        </div>
    )
}
