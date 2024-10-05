import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import {Routes, useLocation} from "react-router-dom"
import {Route} from "react-router-dom"
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'


const Display = () => {
    const displRef  = useRef()
    const location = useLocation()
    const isAlbum = location.pathname.includes("album") //checking ki url me album work ha ya ni hai to true hoga
    const albumId  = isAlbum ? location.pathname.slice(-1) : "" // Agar "album" URL mein hai, toh albumId ko URL ke last character se extract kiya ja raha hai (slice(-1) se), jisse humein album ka ID milta hai. Phir bgColor ko albumsData array se us ID ke base pe fetch kiya ja raha hai
    const bgColor = albumsData[Number(albumId)].bgColor
    
    useEffect(()=>{
         if(isAlbum) {
            displRef.current.style.background = `linear-gradient(${bgColor},#121212)`
         }
         else{
            displRef.current.style.background = `#121212`
         }
    })
    
    
    
    return (
        <div ref={displRef}  className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    )
}

export default Display
