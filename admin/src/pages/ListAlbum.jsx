import React, { useEffect, useState } from 'react'
import { url } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListAlbum = () => {
  const [data, setData] = useState([])

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`)
      if (response.data.success) {
        setData(response.data.allAlbum)
      }
    } catch (error) {
      console.log(error)
      toast.error("Error Occured")
    }
  }

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchAlbums()
        console.log(response)
      } else {
        console.log("Error Occured");
      }
    } catch (error) {
      toast.error("Something Went Wrong")
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])


  return (
    <div>
      <div className='flex m-2 items-center'>
        <p className='font-medium text-lg'>All Album List</p>  {data.length > 0 ?
        <p className='ml-8 font-medium text-lg'>Total Album  : {data.length}</p> : ""
        }
      </div>

      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]  items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols-[1fr_fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                <img src={item.image} className='w-12' alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type="color" value={item.bgColour} />
                <p onClick={() => removeAlbum(item._id)} className='ml-4 cursor-pointer text-lg'>x</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListAlbum
