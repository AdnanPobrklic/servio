const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {type: String, },
    surname: {type: String, },
    address: {type: String, },
    city: {type: String, },
    phone: {type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    createdAt: {type: Date, default: Date.now}  
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Poređenje lozinki koristiti samo user.mathPassword(password) i tjt
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);