import React from 'react'
import Products from '../components/Products';
import Cta3 from '../components/CTA';
import CarouselTUK from '../components/Carousel';
import Layout from './Layout';

export default function GuestLayout() {
  return (
    <Layout child={
        <div>
         guest
        </div>
    }/>
  )
}
