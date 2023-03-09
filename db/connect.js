const mongoose = require('mongoose');



const connectDatabase = (uri) => {
    console.log("Connecting to database...");
    return mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDatabase;
