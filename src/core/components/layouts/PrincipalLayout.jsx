import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../commons/Navbar'

export const PrincipalLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
