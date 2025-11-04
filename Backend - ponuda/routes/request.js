const express = require('express');
const { getRequests, getRequestById, createRequest, updateRequest, deleteRequest, getMyRequests } = require('../controllers/requestController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getRequests);
router.get('/:id', getRequestById);
router.get('/myrequests/:id_sender', getMyRequests);
router.post('/', upload.array('image', 10), createRequest);
router.put('/:id', upload.array('image', 10), updateRequest);
router.delete('/:id', deleteRequest);

module.exports = router;