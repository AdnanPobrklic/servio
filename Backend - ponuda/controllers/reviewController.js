const getReviews = (req, res) => {
    res.send('Get all reviews');
};

const getReviewById = (req, res) => {
    const { id } = req.params;
    res.send(`Get review with ID: ${id}`);
}   

const createReview = (req, res) => {
    res.send('Create a new review');
};

const updateReview = (req, res) => {
    const { id } = req.params;
    res.send(`Update review with ID: ${id}`);
};

const deleteReview = (req, res) => {
    const { id } = req.params;
    res.send(`Delete review with ID: ${id}`);
}

module.exports = {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};