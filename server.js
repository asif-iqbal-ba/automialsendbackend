// const express = require('express');
import express from 'express'
// const appRoute = require('./routes/route.js')
import appRoute from './routes/route.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

/** routes */
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
