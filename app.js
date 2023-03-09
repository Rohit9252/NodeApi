const  express = require('express');
const  app = express();
const connectDatabase = require('./db/connect');
const  PORT= process.env.PORT || 5000;
const products_routes = require('./routes/products');

app.get("/", (req, res)=>{
    res.send("Hello World");
})

// middleware to set the content type to json
app.use("/api/products", products_routes);

const start = async () => {
    try{
        await connectDatabase();
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();