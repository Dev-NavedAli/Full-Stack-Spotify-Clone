import React from 'react'
import DisplayHome from './DisplayHome'
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"


const Display = () => {
    return (
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
            </Routes>

        </div>
    )
}

export default Display
