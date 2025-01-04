const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const app = express()

require ('dotenv').config()

const PORT = process.env.PORT;

//middleware 
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World');
})
const server = async () => {
    await connect()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

server();