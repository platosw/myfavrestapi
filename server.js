const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl, {useNewUrlParser: true}, () => console.log(`Connecting...MongoDB`));
const db = mongoose.connection;



app.listen(port, () => console.log(`Connecting...${port}`));