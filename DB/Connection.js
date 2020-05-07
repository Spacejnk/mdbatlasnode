const mongoose = require('mongoose');

// const URI  = "mongodb+srv://dbUser:dbUser@cluster0-ytn8c.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ytn8c.mongodb.net/test?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('db connected!')
}

module.exports = connectDB;