const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

// Config BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

// view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const apiRoute = require('./router/route');
app.use('/', apiRoute)

app.listen(port, ()=> {
    console.log(`Server Start At Port ${port}`);
})