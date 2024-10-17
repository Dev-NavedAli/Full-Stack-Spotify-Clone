import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const DisplayHome = () => {

    const { songsData, albumsData } = useContext(PlayerContext)
    const scrollContainerRef = useRef()
    const scrollSongRef = useRef()
    const [showLeftArrow, setShowLeftArrow] = useState(false);//for album
    const [showRightArrow, setShowRightArrow] = useState(true);  //for album

    const [showSongLeftArrow, setShowSongLeftArrow] = useState(false) //for song
    const [showSongRightArrow, setShowSongRightArrow] = useState(true) //for song

    const songScrollPosition = () => {
        const leftScroll = scrollSongRef.current.scrollLeft;
        const maxScrollLeft = scrollSongRef.current.scrollWidth - scrollSongRef.current.clientWidth

        setShowSongLeftArrow(leftScroll > 0)

        setShowRightArrow(leftScroll < maxScrollLeft)
    }



    const checkScrollPosition = () => {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

        // Check if the container is at the very beginning
        setShowLeftArrow(scrollLeft > 0);
        // Check if the container is at the end
        setShowRightArrow(scrollLeft < maxScrollLeft);
    };

    const RightScroll = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }

    const leftScroll = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }

    const songRightScroll = () => {
        scrollSongRef.current.scrollBy({ left: 600, behavior: "smooth" })
    }

    const songLeftScroll = () => {
        scrollSongRef.current.scrollBy({ left: -600, behavior: "smooth" })
    }

    useEffect(() => {
        checkScrollPosition();
        songScrollPosition(); //for song
        scrollSongRef.current.addEventListener('scroll', songScrollPosition) //for song
        scrollContainerRef.current.addEventListener('scroll', checkScrollPosition);
    }, []);

    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured</h1>

                <div className='relative'>
                    <div className='flex overflow-x-auto scroll-smooth'>
                        {showLeftArrow && (<button onClick={leftScroll}  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full">
                            <FaArrowLeft size={45} />
                        </button>)}
                        <div ref={scrollContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth w-full">
                            {albumsData.map((item, index) => (
                                <AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
                            ))}
                        </div>
                        {showRightArrow && (<button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full">
                            <FaArrowRight onClick={RightScroll} size={45} />
                        </button>)}

                    </div>
                </div>
            </div >

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today Biggest Hits</h1>
                <div className=' relative flex overflow-auto'>
                    {showSongLeftArrow && (<button onClick={songLeftScroll} className="hidden sm:inline-block cursor-pointer ">
                        <FaArrowLeft size={45} />
                    </button>)}

                    <div ref={scrollSongRef} className="flex space-x-4 overflow-x-auto scroll-smooth w-full">
                        {songsData.map((item, index) => (
                            <SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
                        ))}
                    </div>
                    {showRightArrow && (<button className="hidden sm:inline-block cursor-pointer">
                        <FaArrowRight onClick={songRightScroll} size={45} />
                    </button>)}

                </div>
            </div>
        </>
    )
}

export default DisplayHome
