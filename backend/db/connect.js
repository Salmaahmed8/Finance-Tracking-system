const mongoose = require('mongoose');

const connect = async () => {
    try {
        console.log("Trying to connect with database..");
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Connected to database");
    } catch (error) {
        console.log("Failed to connect to database..", error.message);
        process.exit(1);
    }
};

module.exports = connect;
