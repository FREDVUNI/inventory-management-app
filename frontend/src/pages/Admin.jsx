import React from 'react'
import '../assets/boxicons-2.0.7/css/boxicons.min.css'
import Layout from '../admin/components/layout/Layout'
import '../assets/css/grid.css'
import '../assets/css/index.css'
import Dashboard from './admin/Dashboard'

document.title = 'Inventory'
const Admin = () => {
  return (
    <Dashboard/>
  )
}

export default Admin