const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const companySchema = new Schema({
    name: { type: String, required: true },
    id_number: { type: String, required: true, unique: true },
    pdv_number: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    owner: { ref: 'User', type: Schema.Types.ObjectId},
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photos_of_works: { type: [String], default: [] },
    users: { ref: 'User', type: [Schema.Types.ObjectId], default: [] },
    logo: { type: String},
    date_of_establishment: { type: Date },
    services: { type: [String], default: [] },
    website: { type: String },
    password: { type: String, required: true },
    premium: { type: Boolean, default: false }
}, { timestamps: true });


companySchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Poređenje lozinki koristiti samo company.mathPassword(password) i tjt
companySchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model('Company', companySchema);