import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColour = req.body.bgColour;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image",});
    
    const albumData = {
        name,
        desc,
        bgColour,
        image:imageUpload.secure_url,
        imageUpload,
    }

    const album = albumModel(albumData)
    await album.save()
    return res.json({success:true,album})

  } catch (error) {
     return res.json({success:false,error})
  }
};

const listAlbum = async (req, res) => {};

const removeAlbum = async (req, res) => {};

export { addAlbum, listAlbum, removeAlbum };
