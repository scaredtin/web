import React from 'react'

import Layout from './Layout';
import Sale from '../components/Sale';
import CarouselTUK from '../components/Carousel';

export default function UserLayout() {
  return (
    <div>
      <Layout child={
        <div>
          <CarouselTUK/>
          <Sale/>
        </div>
      }/>
    </div>
  )
}
