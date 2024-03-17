import React from 'react'
import Filter1 from '../elements/Filter'
import Products from '../components/Products'
import Layout from '../Layout/Layout'

export default function ProductsFilter() {
  return (
    <Layout child={
        <div>
            <Filter1/>
            <Products/>
 
        </div>
    }/>
  )
}
