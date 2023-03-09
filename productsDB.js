require('dotenv').config();
const connectDatabase = require('./db/connect');
const Product = require('./models/products');
const ProductJson = require("./products.json");


const start = async () => {
    try{
    
        await connectDatabase(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        // await Product.deleteMany();
        console.log("Products added to database");
    }catch(error){
        console.log(error);
    }
}


start();