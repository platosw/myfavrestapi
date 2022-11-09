const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());
app.use(cors());

const dancersRouter = require('./routes/dancers');
app.use('/dancers', dancersRouter);


app.listen(port, () => console.log(`Connecting...PORT:${port}`));