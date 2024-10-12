import React, { useContext, useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, useLocation } from "react-router-dom"
import { Route } from "react-router-dom"
import DisplayAlbum from './DisplayAlbum'
import { PlayerContext } from '../context/PlayerContext'


const Display = () => {

    const { albumsData } = useContext(PlayerContext)

    const displRef = useRef()
    const location = useLocation()
    const isAlbum = location.pathname.includes("album") //checking ki url me album work ha ya ni hai to true hoga
    const albumId = isAlbum ? location.pathname.split('/').pop() : ""
    const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id = albumId)).bgColour : "#121212"

    useEffect(() => {
        if (isAlbum) {
            displRef.current.style.background = `linear-gradient(${bgColor},#121212)`
        }
        else {
            displRef.current.style.background = `#121212`
        }
    })



    return (
        <div ref={displRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0'>
            {albumsData.length > 0 ?

                <Routes>
                    <Route path='/' element={<DisplayHome />} />
                    <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((x) => (x._id == albumId))} />} />
                </Routes>
                : null}
        </div>
    )
}

export default Display
