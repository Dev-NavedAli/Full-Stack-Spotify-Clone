import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import {Routes, useLocation} from "react-router-dom"
import {Route} from "react-router-dom"
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'


const Display = () => {
    const displRef  = useRef()
    const location = useLocation()
    const isAlbum = location.pathname.includes("album")
    const albumId  = isAlbum ? location.pathname.slice(-1) : ""
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
