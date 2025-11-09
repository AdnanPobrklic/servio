const Company = require("../models/Company");
const { uploadToCloudinary } = require("../utils/cloudinaryUpload");
const generateToken = require("../utils/generateToken");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({}, { password: 0, __v: 0 })
      .populate("owner", "name email phone")
      .populate("services")
      .populate("users", "name email phone");
    res.send(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Company ID is required" });
  }

  const company = await Company.findById(id)
    .populate("owner", "name email phone")
    .populate("services")
    .populate("users", "name email phone")
    .select("-__v -password");
  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  res.send(company);
};

const createCompany = async (req, res) => {
  const {
    name,
    id_number,
    pdv_number,
    address,
    city,
    owner,
    phone,
    email,
    users,
    date_of_establishment,
    services,
    website,
    password,
    premium,
  } = req.body;

  if (
    !name ||
    !id_number ||
    !pdv_number ||
    !address ||
    !city ||
    !owner ||
    !phone ||
    !email ||
    !password
  ) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled" });
  }

  const existingCompany = await Company.findOne({
    $or: [{ id_number }, { pdv_number }, { email }],
  });

  let logoUrl = null;
  if (req.files.logo) {
    const logo = req.files.logo[0];
    logoUrl = await uploadToCloudinary(logo.buffer, "ponudi/logos");
  }

  const photos_of_works_urls = [];
  if (req.files.photos_of_works && req.files.photos_of_works.length > 0) {
    for (const file of req.files.photos_of_works) {
      const url = await uploadToCloudinary(file.buffer, "company_photos");
      photos_of_works_urls.push(url);
    }
  }

  if (existingCompany) {
    return res
      .status(400)
      .json(
        "Kompanija sa datim ID brojem, PDV brojem ili email-om već postoji"
      );
  }

  const newCompany = new Company({
    name,
    id_number,
    pdv_number,
    address,
    city,
    owner,
    phone,
    email,
    photos_of_works: photos_of_works_urls,
    users,
    logo: logoUrl,
    date_of_establishment,
    services,
    website,
    password,
    premium,
  });
  await newCompany.save();
  res.send({
    message: "Firma uspjesno kreirana",
    token: generateToken(newCompany._id),
  });
};

const updateCompany = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    id_number,
    pdv_number,
    address,
    city,
    owner,
    phone,
    email,
    users,
    date_of_establishment,
    services,
    website,
    password,
    premium,
  } = req.body;

  if (!id) {
    return res.status(400).json({ message: " ID firme je obavezan!" });
  }

  let logoUrl = null;
  if (req.files.logo) {
    const logo = req.files.logo[0];
    logoUrl = await uploadToCloudinary(logo.buffer, "ponudi/logos");
  }

  const photos_of_works_urls = [];
  if (req.files.photos_of_works && req.files.photos_of_works.length > 0) {
    for (const file of req.files.photos_of_works) {
      const url = await uploadToCloudinary(file.buffer, "company_photos");
      photos_of_works_urls.push(url);
    }
  }

  const company = await Company.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        id_number,
        pdv_number,
        address,
        city,
        owner,
        phone,
        email,
        users,
        logo: logoUrl,
        date_of_establishment,
        services,
        website,
        password,
        premium,
      },
      $push: { photos_of_works: { $each: photos_of_works_urls } },
    },
    { new: true }
  );

  if (!company) {
    return res.status(404).json({ message: "Firma nije pronađena!" });
  }

  res.send({
    message: "Firma uspješno ažurirana!",
    token: generateToken(company._id),
  });
};

const deletePhotoOfWorks = async (req, res) => {
  const { companyId, photoUrl } = req.body;
  if (!companyId || !photoUrl) {
    return res
      .status(400)
      .json({ message: "ID firme i URL fotografije su obavezni!" });
  }
  const company = await Company.findById(companyId);
  if (!company) {
    return res.status(404).json({ message: "Firma nije pronađena!" });
  }
  company.photos_of_works = company.photos_of_works.filter(
    (url) => url !== photoUrl
  );
  await company.save();
  res.send({ message: "Fotografija uspješno obrisana!" });
};

const deleteCompany = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: " ID firme je obavezan" });
  }

  const company = await Company.findByIdAndDelete(id);
  if (!company) {
    return res.status(404).json({ message: "Firma nije pronađena!" });
  }
  res.send({ message: "Firma uspješno obrisana!" });
};

module.exports = {
  getCompanies,
  deletePhotoOfWorks,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
