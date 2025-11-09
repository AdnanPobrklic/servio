const express = require("express");
const {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
  deletePhotoOfWorks,
} = require("../controllers/companyController");
const router = express.Router();
const multer = require("multer");
const { authMiddleware } = require("../middleware/authentication");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.post(
  "/",
  upload.fields([
    { name: "photos_of_works", maxCount: 10 },
    { name: "logo", maxCount: 1 },
  ]),
  createCompany
);
router.put(
  "/:id",
  upload.fields([
    { name: "photos_of_works", maxCount: 10 },
    { name: "logo", maxCount: 1 },
  ]),
  updateCompany
);
router.delete("/:id", deleteCompany);
router.delete("/photo-of-works", deletePhotoOfWorks);
module.exports = router;
