const express = require('express');
const connectToDatabase = require('./config/db'); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
