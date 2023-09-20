import { useState } from 'react'
import './App.css'

export function App() {

  


    return (
        <>
            <header style={{padding:"1rem",borderBottom:"1px solid rgba(188, 188, 188, 0.247)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                <div className="logo" style={{height:"50px",display:"flex",flexDirection:"row",gap:"4px",alignItems:"center"}}>
                    <img src="../src/assets/icons8-airbnb.svg" alt="airbnblogo" />
                    <h2 style={{color:"red",fontFamily: "Mulish , sans-serif",fontWeight:"bolder"}}>airbnb</h2>
                </div>
                <div className="searchBar" style={{width:"440px"}}>
                    <div className="searchBarOptions">
                        <button></button>
                        <button></button>
                        
                    </div>
                </div>
                <div className="options">

                </div>
            </header>
            <div className="container">

            </div>
        </>
        
    )
  
}

