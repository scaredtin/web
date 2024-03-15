import React from 'react'
import GuestLayout from './Layout/GuestLayout';
import { useUserState } from './contexts/ContextProvider';
import { Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Cta3 from './components/CTA';
import CarouselTUK from './components/Carousel';
import Filter1 from './elements/Filter';

export default function App() {
        const {currentUser, userToken, setCurrentUser, setUserToken} = useUserState();

    if(!userToken){
        return <Navigate to="/login"/>
    }
    return (
        <div className=""> 
        <Banner/>
        <Header/>
        <Cta3/>
        <CarouselTUK/>
        <Filter1/>
        <GuestLayout/>    
        <Footer/>                   
        </div>
    )
}
