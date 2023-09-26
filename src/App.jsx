import { useState } from 'react'
import './App.css'
import { mainNavBar } from './assets/jsx/mainNavbar'
import { mainNavBarBottom } from './assets/jsx/mainNavBarBottom'
import { createAdverts } from './assets/jsx/advert'

export function App() {

  


    return (
        <>
            <div className="navbar" style={{position:"fixed",top:"0",backgroundColor:"white"}}>
                {mainNavBar()}
                {mainNavBarBottom()}
            </div>
            <div className="container">
                <div className="adverts" style={{marginTop:"200px"}}>
                    {createAdverts()}
                </div>
                
            </div>
        </>
        
    )
  
}

