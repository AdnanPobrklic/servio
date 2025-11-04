const Offer = require("../models/Offer");

const getOffers = async (req, res) => {
  const offers = await Offer.find()
    .populate({
      path: "id_request",
      populate: { path: "id_sender", select: "name surname email" },
    })
    .populate("id_sender", "name email");

  res.send(offers);
};

const getMyOffers = async (req, res) => {
    const { id_sender } = req.params;
    const offers = await Offer.find({ id_sender })
    .populate({ path: 'id_request' , populate: { path: 'id_sender', select: 'name surname email' } })

    res.send(offers);
}

const getOfferById = async (req, res) => {
  const { id } = req.params;

  const offer = await Offer.findById(id)
    .populate({
      path: "id_request",
      populate: { path: "id_sender", select: "name surname email" },
    })
    .populate("id_sender", "name email");

  if (!offer) {
    return res.status(404).send("Ponuda nije pronađena");
  }
  res.send(offer);
};

const createOffer = async (req, res) => {
  const { id_request, id_sender, description, price, date_of_start } = req.body;

  if (!id_request || !id_sender || !price) {
    return res
      .status(400)
      .send("Nedostaju obavezna polja: id_request, id_sender, price");
  }

  const newOffer = new Offer({
    id_request,
    id_sender,
    description,
    price,
    date_of_start,
  });
  await newOffer.save();
  res.send(newOffer);
};

const updateOffer = async (req, res) => {
  const { id } = req.params;
  const { id_request, id_sender, description, price, date_of_start, status } =
    req.body;

  const offer = await Offer.findByIdAndUpdate(
    id,
    {
      id_request,
      id_sender,
      description,
      price,
      date_of_start,
      status,
    },
    { new: true }
  );
  if (!offer) {
    return res.status(404).send("Ponuda nije pronađena");
  }
  res.send(offer);
};

const deleteOffer = async (req, res) => {
  const { id } = req.params;
  const offer = await Offer.findByIdAndDelete(id);
  if (!offer) {
    return res.status(404).send("Ponuda nije pronađena");
  }

  res.send("Ponuda je obrisana");
};

module.exports = {
  getOffers,
  createOffer,
  getOfferById,
  updateOffer,
  deleteOffer,
  getMyOffers
};
