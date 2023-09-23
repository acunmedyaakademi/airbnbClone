import { useState } from 'react'
import './App.css'
import { mainNavBar } from './assets/jsx/mainNavbar'
import { mainNavBarBottom } from './assets/jsx/mainNavBarBottom'

export function App() {

  


    return (
        <>

            {mainNavBar()}
            {mainNavBarBottom()}
            <div className="container">

            </div>
            
        </>
        
    )
  
}

