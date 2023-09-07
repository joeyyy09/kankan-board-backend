const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://menteharshith:Twfllv12fCIRyGcW@cluster0.4gicrga.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
