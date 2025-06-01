import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import './style.css'

const DefaultComponent = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <HeaderComponent />
      <main className="layout-content">
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

export default DefaultComponent