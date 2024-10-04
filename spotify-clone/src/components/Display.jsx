import React from 'react'
import DisplayHome from './DisplayHome'
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import DisplayAlbum from './DisplayAlbum'


const Display = () => {
    return (
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>

        </div>
    )
}

export default Display
