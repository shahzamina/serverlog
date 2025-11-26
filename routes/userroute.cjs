const router=require('express').Router()
const {fill,fillCon}=require('../controllers/formcon.cjs')
const {validate,validateForm}=require('../middleware/formval.cjs')

const renCon=require('../controllers/rencon.cjs')
const renVal=require('../middleware/renval.cjs')

const multer = require("multer");

const {
  addPart,
  getAllParts,
  updatePart,
  deletePart,getmod
} = require("../controllers/procon.cjs");
const validatePart = require("../middleware/proval.cjs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder for images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post('/form',validateForm,fillCon)
router.post('/forms',validate,fill)
router.post('/rental',renVal,renCon)

router.post("/add", upload.single("image"), validatePart, addPart);
router.get("/", getAllParts);
router.get("/get", getmod);
router.put("/:id", upload.single("image"), updatePart);
router.delete("/:id", deletePart);

module.exports=router