const Request = require('../models/Request');
const { uploadToCloudinary } = require('../utils/cloudinaryUpload');

const getRequests = async (req, res) => {
    const requests = await Request.find().populate('id_sender', 'name surname email phone');
    res.send(requests);
};

const getMyRequests = async (req, res) => {
    const { id_sender } = req.params;
    const requests = await Request.find({ id_sender });
    res.send(requests);
}

const getRequestById = async (req, res) => {
    const { id } = req.params;
    const request = await Request.findById(id).populate('id_sender', 'name surname email phone');
    if (!request) {
        return res.status(404).send('Zahtjev nije pronađen');
    }

    res.send(request);
}

const createRequest = async (req, res) => {
    const {id_sender, budget, description, image, city, date_of_start, service_type, additional_info, contact_time} = req.body;
   
    if (!id_sender || !budget || !description || !city  || !service_type) {
        return res.status(400).send('Nedostaju obavezna polja');
    }

    const image_url =[]

    if(req.files && req.files.length > 0){
        for(const file of req.files){
            const url = await uploadToCloudinary(file.buffer, 'requests');
            image_url.push(url);
        }
    }

    const newRequest = new Request({
        id_sender,
        budget,
        description,
        image: image_url,
        city,
        date_of_start,
        service_type,
        additional_info,
        contact_time
    });
    await newRequest.save();

    res.send(newRequest);
};

const updateRequest = async (req, res) => {
    const { id } = req.params;
    const {id_sender, budget, description, image, city, date_of_start, service_type, additional_info, contact_time} = req.body;

    
    const image_url =[]

    if(req.files && req.files.length > 0){
        for(const file of req.files){
            const url = await uploadToCloudinary(file.buffer, 'requests');
            image_url.push(url);
        }
    }

    const updateRequest = await Request.findByIdAndUpdate(id,
    {
        $set: {
        id_sender,
        budget,
        description,
        city,
        date_of_start,
        service_type,
        additional_info,
        contact_time
    },
    $push: {

        image: { $each: image_url },
    }
 } , { new: true });

    if (!updateRequest) {
        return res.status(404).send('Zahtjev nije pronađen');
    }


    res.send(`Update request with ID: ${id}`);
};

const deleteRequest = async (req, res) => {
    const { id } = req.params;

    const deletedRequest = await Request.findByIdAndDelete(id);
    if (!deletedRequest) {
        return res.status(404).send('Zahtjev nije pronađen');
    }
    res.send(`Delete request with ID: ${id}`);
};

module.exports = {
    getRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,
    getMyRequests
};