import { useState } from 'react'
import './App.css'
import { mainNavBar } from './assets/jsx/mainNavbar'
import { mainNavBarBottom } from './assets/jsx/mainNavBarBottom'
import { createAdverts } from './assets/jsx/advert'

export function App() {
    return (
        <>
            <div className="container">
                <div className="navbar" style={{position:"fixed",right: "0",top:"0",backgroundColor:"white",width:"calc(100%)",paddingInline:"60px",zIndex:10000}}>
                    {mainNavBar()} 
                    {mainNavBarBottom()}
                </div>
                <div className="adverts" style={{marginTop:"200px"}}>
                    {createAdverts()}
                </div>
            </div>
        </>
        
    )
  
}

