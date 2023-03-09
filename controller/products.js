const getAllProducts = async(req, res) => {

    res.status(200).json({msg: "This is the getAllProducts route"});

};
const getAllProductsTesting = async(req, res) => {

    res.status(200).json({msg: "This is the getAllProducts Testing route"});

};

module.exports = {
    getAllProducts,
    getAllProductsTesting
}