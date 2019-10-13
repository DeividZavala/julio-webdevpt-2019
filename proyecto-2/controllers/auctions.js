const Auction = require("../models/Auction");
const Bid = require("../models/Bid");

exports.createAuction = (req, res) => {
  const {
    user: { _id: author }
  } = req;
  const { body } = req;
  const images = req.files.map(file => file.secure_url);
  let { lat, lng, address, ...auction } = body;
  auction = {
    author,
    images,
    ...auction,
    location: { address, coords: [lng, lat] }
  };
  Auction.create(auction)
    .then(auction => {
      res.redirect("/profile");
    })
    .catch(errorMessage => {
      res.render("newAuction", {
        title: "New Auction",
        create: true,
        errorMessage
      });
    });
};

exports.updateAuction = (req, res) => {
  const { id } = req.params;
  const { body: auction } = req;
  if (req.files) {
    const images = req.files.map(file => file.secure_url);
    auction = { ...auction, images };
  }
  Auction.findByIdAndUpdate(id, { $set: auction }, { new: true })
    .then(auction => {
      //res.redirect("/profile");
      res.status(200).json({ auction });
    })
    .catch(errorMessage => {
      res.render("newAuction", { title: "New Auction", errorMessage });
    });
};

exports.deleteAuction = (req, res) => {
  const { id } = req.params;
  Auction.findByIdAndDelete(id).then(() => {
    res.redirect("/profile");
  });
};

exports.updateAuctionLeader = obj => {
  return Auction.findById(obj.auction)
    .populate("lider", "bid")
    .then(auction => {
      if (obj.offer > auction.initial_price || obj.offer > auction.lider.bid) {
        return Bid.create({ ...obj }).then(bid => {
          return Auction.findByIdAndUpdate(auction._id, {
            $set: { lider: bid._id }
          });
        });
      }
      throw new Error("Oferta no valida");
    });
};
