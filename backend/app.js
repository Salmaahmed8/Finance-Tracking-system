const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./db/connect');
const fs = require('fs');
const app = express()

require ('dotenv').config()

const PORT = process.env.PORT || 5000;

//middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser());

//Routes
const routeFiles = fs.readdirSync("./routes");
routeFiles.forEach((file) => {
    //use dynamin import
    import(`./routes/${file}`)
    .then((route) => {
        app.use("/api", route.default);
    })
    .catch( (error) => {
        console.log("Failed to load route file", error);
    });
})


app.get('/', (req, res) => {
    res.send('Hello World');
})
const server = async () => {
    try {
        await connect();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log("Failed to connect to server due to", error.message);
        process.exit(1);
    }
}

server();