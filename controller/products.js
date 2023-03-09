const Product = require("../models/products");


const getAllProducts = async (req, res) => {
    const {company, name, featured, sort, select } = req.query; 

    const queryObject = {};

    if(company){
        queryObject.company = company;
   
    }


    if(featured){
        queryObject.featured = featured;

    }

    if(name){
        queryObject.name = {$regex: name, $options: "i"};
    }


    let apiData = Product.find( queryObject );

    if(sort){
        let sortFix = sort.replace( ",", "  ");
        
        apiData = apiData.sort(sortFix);

    }

    
    if(select){
        let selectFix = select.split(" ").join(" ");
        
        apiData = apiData.select(selectFix);

    }

    console.log(queryObject);
    const myData = await apiData;
    res.status(200).json({ myData });

};
const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).select("name company");
    console.log(req.query);
    res.status(200).json({ myData });

};

module.exports = {
    getAllProducts,
    getAllProductsTesting
}