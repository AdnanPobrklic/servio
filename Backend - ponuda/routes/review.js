const express = require('express');
const { getReviews, getReviewById, createReview, updateReview, deleteReview } = require('../controllers/reviewController');
const router = express.Router();

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;