const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const getUsers = async (req, res) => {

    try{
        const users = await User.find({},{password:0, __v:0});
        res.send(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }

}

const getUserById = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send('User ID is required');
    }
    const user = await User.findById(id, {password:0, __v:0});
    if(!user) {
        return res.status(404).send('User not found');
    }

    res.send(user);
}

const createUser = async (req, res) => {
    const {name, email, password, phone, surname, address, city} = req.body;

    if(!name || !email || !password || !phone || !surname || !address || !city) {
        return res.status(400).send('All fields are required');
    }

    const userExists = await User.find({ $or: [ { email }, { phone } ] });
    if(userExists.length > 0) {
        return res.status(400).send('User with this email or phone already exists');
    }

    const user = new User({
        name,
        email,
        password,
        phone,
        surname,
        address,
        city
    });

    await user.save();

    res.send({
        name: user.name,
        email: user.email,
        phone: user.phone,
        surname: user.surname,
        address: user.address,
        city: user.city,
        token: generateToken(user._id)
    })

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, surname, address, password, city } = req.body;
    if(!id) {
        return res.status(400).send('User ID is required');
    }
    const user = await User.findByIdAndUpdate(id, {
        name,
        email,
        phone,
        surname,
        address,
        password,
        city
    }, { new: true });

    res.send({
        name: user.name,
        email: user.email,
        phone: user.phone,
        surname: user.surname,
        address: user.address,
        city: user.city,
        token: generateToken(user._id)
    });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).send('User ID is required');
    }
    await User.findByIdAndDelete(id);
    
    res.send(`User with ID: ${id} deleted successfully`);
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};