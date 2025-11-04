const express = require('express');
const { getOffers, getOfferById, createOffer, updateOffer, deleteOffer, getMyOffers } = require('../controllers/offerController');
const router = express.Router();

router.get('/', getOffers);
router.get('/:id', getOfferById);
router.get('/myoffers/:id_sender', getMyOffers)
router.post('/',createOffer);
router.put('/:id', updateOffer);
router.delete('/:id', deleteOffer);

module.exports = router;