const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://Shrinidhi:Shri@crud.8vx9pff.mongodb.net/users", {
            useNewUrlParser: true, useUnifiedTopology: true,
        })

        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);

    }
}

module.exports = connectDB