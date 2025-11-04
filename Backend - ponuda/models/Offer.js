const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const offerSchema = new Schema({
    id_request: { type: mongoose.Types.ObjectId, ref: 'Request', required: true },
    id_sender: { type: mongoose.Types.ObjectId, ref: 'Company', required: true },
    description: { type: String},
    price: { type: Number, required: true },
    date_of_start: { type: Date },
    status: { type: String, enum: ['open', 'pending', 'closed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);
