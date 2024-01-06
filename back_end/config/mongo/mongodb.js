const config = {};  
const conn = `mongodb+srv://guest_admin:greencloud@cluster0.0lsxams.mongodb.net/`;

const mongoose = require("mongoose");


const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(conn, {
            maxPoolSize:100,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;