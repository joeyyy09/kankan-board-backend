const express = require('express');
const app = express();
const cards = require('./routes/cards');
const connectDB = require('./db/connect');
require('dotenv').config();
// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/cards', cards);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
