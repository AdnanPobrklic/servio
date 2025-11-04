const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const reviewSchema = new Schema({
    id_user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    id_company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
