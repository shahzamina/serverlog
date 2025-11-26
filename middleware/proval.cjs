// middleware/validatePart.cjs


const validatePart = (req, res, next) => {
  const { partNumber, manufacturer, modality, product } = req.body;
const img=req.file
  // ✅ Check for required text fields
  if (!partNumber || !manufacturer || !modality || !product  ) {
    return res.status(400).json({
      success: false,
      message:
        "Fill all fields",
    });
  }


  // ✅ Required image field
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Please upload an image."
    });
  }
  // Everything looks good → move to controller
  next();
};

module.exports = validatePart;
