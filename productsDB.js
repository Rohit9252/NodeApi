require('dotenv').config();
const connectDatabase = require('./db/connect');
const Product = require('./models/products');
const ProductJson = require("./products.json");


const start = async () => {
    try{
    
        await connectDatabase(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        console.log("Products added to database");
        // const newProduct = await Product.create({
        //     name: "Samsung Galaxy S21",
        //     price: 1000,
        //     company: "samsung"
        // });
        // console.log(newProduct);
    }catch(error){
        console.log(error);
    }
}


start();