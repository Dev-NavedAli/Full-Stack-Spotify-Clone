import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColour = req.body.bgColour;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
      imageUpload,
    };

    const album = albumModel(albumData);
    await album.save();
    return res.json({ success: true, album });
  } catch (error) {
    return res.json({ success: false, error });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbum = await albumModel.find({});
    res.json({ success: true, allAlbum });
  } catch (error) {
    res.json({ sucess: false, error });
  }
};

const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Item is deleted" });
  } catch (error) {
    res.json({ sucess: false, error });
  }
};

export { addAlbum, listAlbum, removeAlbum };
