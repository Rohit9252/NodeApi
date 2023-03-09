const mongoose = require('mongoose');

uri = "mongodb+srv://root:root@nodeapi.zjhqppe.mongodb.net/NodeApi?retryWrites=true&w=majority"

const connectDatabase = () => {
    console.log("Connecting to database...");
    return mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDatabase;
