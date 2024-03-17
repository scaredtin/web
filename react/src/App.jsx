import React from 'react'
import { useUserState } from './contexts/ContextProvider';
import { Navigate} from 'react-router-dom';
import CarouselTUK from './components/Carousel';
import Products from './components/Products';
import Cta3 from './components/CTA';
import Layout from './Layout/Layout';



export default function App() {
    const {currentUser, userToken, setCurrentUser, setUserToken} = useUserState();

    if(!userToken){
        return <Navigate to="/login"/>
    }          
    return (
        <div className="">  
        <Layout child={
            <div>
                <Cta3/>
                <CarouselTUK/>
                <Products/> 
            </div>
        }/>                           
        </div>
    )
}
