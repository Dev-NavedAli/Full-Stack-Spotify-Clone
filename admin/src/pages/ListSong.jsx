import React, { useEffect, useState } from 'react'
import axios from "axios"
import { url } from "../App"
import { toast } from 'react-toastify'

const ListSong = () => {

  const [data, setData] = useState([])
  const fetchSong = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`)
      if (response.data.success) {
        setData(response.data.song)
      }
    } catch (error) {
      toast.error("Error Occured")
    }
  }

  const removeSong = async(id)=>{
    try {
      const response = await axios.post(`${url}/api/song/remove`,{id})
      if(response.data.success){
        toast.success("Song Deleted Succesfully")
        console.log(response)
        fetchSong()
      }else{
        console.log("Something Went Wrong")
        toast.error("Some Error is Occured")
      }
    } catch (error) {
      toast.error("Error happen")
    }
  }

  useEffect(() => {
    fetchSong()
  }, [])
  return (

    <div>
      <p>All song List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]  items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {
          data.map((item, index) => {
            return (
            <div key={index} className='grid grid-cols-[1fr_fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img src={item.image} className='w-12' alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p onClick={()=>removeSong(item._id)} className='ml-4 cursor-pointer text-lg'>x</p>              
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListSong
