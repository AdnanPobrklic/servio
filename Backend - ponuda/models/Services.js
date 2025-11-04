const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const serviceSchema = new Schema({
    category: { type: String, required: true },
    subcategory: { type: [String] },
});

module.exports = mongoose.model('Service', serviceSchema);