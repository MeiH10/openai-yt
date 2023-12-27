const { generateMeta, generateImage } = require('./controllers/openaiController')
const express = require('express')


//setup the express app
const app = express();

app.listen(4000, ()=>{console.log('listening for request on port 4000')});

//middleware
app.use(express.json())
app.use(express.static('public'))

// routes

app.post('/openai/meta', generateMeta);
app.post('/openai/image', generateImage);