import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { FaPlus , FaMinus , FaVolumeMute } from "react-icons/fa";

const Player = () => {

    const {seekBar,seekBg,playStatus,play,pause,track,time,previous,next,seekSong,volume,setVolume,toggleMute,isMuted} = useContext(PlayerContext)

    const volumeUp = ()=>{
        if (volume < 1) {
            setVolume(prevVolume => Math.min(prevVolume + 0.1, 1));
        }
    }

    const volumeDown = ()=>{
        if (volume > 0) {
            setVolume(prevVolume => Math.max(prevVolume - 0.1, 0));
        }
    }

    const handleVolume = (e)=>{
        setVolume(e.target.value)
    }

  return track ? (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div> 
        <div className="flex flex-col items-center gap-1 m-auto">
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                {playStatus
                ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                }   
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className="flex items-center gap-5 ">
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div onClick={seekSong} ref={seekBg} className="w-[40vw] maxx-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75 justify-center">
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <button onClick={toggleMute}>{isMuted ? (<img className='w-4' src={assets.volume_icon} alt="" />) : (<FaVolumeMute className='w-4'/>)}</button>
            
            <FaMinus onClick={volumeDown} className='cursor-pointer' />
            <input className='w-20 bg-slate-50 h-1 rounded ' type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} id='volume' />
            <FaPlus onClick={volumeUp} className='cursor-pointer' />
            
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  ) : null
}

export default Player
