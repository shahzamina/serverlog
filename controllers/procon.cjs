const Part = require("../models/pro.cjs");
const multer=require('multer')
const upload=multer({dest:'uploads/'})
// If using Cloudinary for image uploads
// const cloudinary = require("cloudinary").v2;

const addPart = async (req, res) => {
  try {
    const {
      partNumber,
      manufacturer,
      modality,
      product,
      modal
    } = req.body;

    // Optional image handling (if uploaded)
    const imgPath = req.file ? `/uploads/${req.file.filename}` : null;
console.log('img',imgPath)
    // Create new part document
    const newPart = new Part({
      partNumber,
      manufacturer,
      modality,
      product,
      modal: modal || "", // optional
      image: imgPath 
    });

    await newPart.save();

    res.status(201).json({
      success: true,
      message: "Part added successfully!",
      part: newPart
    });
  } catch (error) {
    console.error("Error adding part:", error);
    res.status(500).json({
      success: false,
      message: "Server error while adding part.",
      error: error.message
    });
  }
};

// ✅ Get all parts
const getAllParts = async (req, res) => {
  try {
    const parts = await Part.find().sort({createdAt:-1});
    res.status(200).json(parts);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch parts",
      error: error.message
    });
  }
};

// GET /api/parts?modality=CR
const getmod= async (req, res) => {
  const { modality } = req.query;
  try {
    const parts = await Part.find({ modality }); // MongoDB query
    res.json(parts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch parts' });
  }
};


// ✅ Update part
const updatePart = async (req, res) => {
  try {
        const { id } = req.params;
    const {  partNumber,
      manufacturer,
      modality,
      product,
      modal} = req.body;

      const updatedPart={ partNumber,
      manufacturer,
      modality,
      product,
      modal}

      if (req.file) updatedPart.image = `/uploads/${req.file.filename}`;


    const updated = await Part.findByIdAndUpdate(id, updatedPart, {
      new: true
    });
    res.status(200).json({
      success: true,
      message: "Part updated successfully",
      part: updated
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating part",
      error: error.message
    });
  }
};

// ✅ Delete part
const deletePart = async (req, res) => {
  try {
    const deletedPart = await Part.findByIdAndDelete(req.params.id);
    if (!deletedPart) {
      return res.status(404).json({ success: false, message: "Part not found" });
    }
    res.status(200).json({
      success: true,
      message: "Part deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting part",
      error: error.message
    });
  }
};

module.exports = {
  addPart,
  getAllParts,
 getmod,
  updatePart,
  deletePart
};
