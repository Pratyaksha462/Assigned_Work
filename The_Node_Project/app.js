
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config(); // Correct usage to load environment variables
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.json())
app.use(express.json());

const postRoute = require("./routes/posts")
app.use("/person", postRoute);
// app.use('/posts', () => {
//     console.log("This is the middleware")
// });



// Routes
app.get('/', async (req, res) => {
    res.send("I am in home");
});


// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
