// packges required
const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

// routes
const userRoutes = require('./routes/user');

// create app
const app = express();

// provide port
const PORT = 8000;

// work with frontend
app.use(cors());

// json parser
app.use(express.json());

// connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/frew')
.then(() => console.log('DB connected'))
.catch((err) => console.log(`DB connection error: ${err}`));

app.use('/', userRoutes);

// start server
app.listen(PORT, () => {
    console.log(`server Running at port: ${PORT}`)
})