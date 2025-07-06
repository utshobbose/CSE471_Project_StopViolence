const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
const mongoString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ht29o8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

//Middleware
app.use(cors());
app.use(express.json()); 

mongoose.connect(mongoString)
.then (() => console.log("Database connected"))
.catch((err) => console.error(err));


// For testing purposes, you can add a simple route
// to check if the server is running
app.get('/', (req, res) => {
    res.send("Stop Violence API is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:${PORT}`));