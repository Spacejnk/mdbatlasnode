const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-wwu6d.mongodb.net/test?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  });
    console.log('db connected!')
}

module.exports = connectDB;