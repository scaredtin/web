import React from 'react'

import Layout from './Layout';
import Sale from '../components/Sale';

export default function UserLayout() {
  return (
    <div>
      <Layout child={
        <div>
          <Sale/>
        </div>
      }/>
    </div>
  )
}
