const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const requestSchema = new Schema({
    id_sender: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    budget: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: [String] },
    city: { type: String, required: true },
    status: { type: String, enum: ['open', 'pending', 'closed'], default: 'open' },
    date_of_start: { type: Date, },
    service_type: { type: String,  required: true },
    additional_info: {type: String},
    contact_time: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);