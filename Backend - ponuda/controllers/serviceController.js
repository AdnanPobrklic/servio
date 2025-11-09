const Service = require('../models/Services');

const createService = async (req, res) => {

    const {name, subcategories} = req.body;

    if(!name){
        return res.status(400).json({message: "Category name is required"});
    }
    try {
        const newService = new Service({
            category: name,
            subcategory: subcategories 
        });
        const savedService = await newService.save();
        res.status(201).json(savedService);
    }
    catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
}

module.exports = {
    createService
};